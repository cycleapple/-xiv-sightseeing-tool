/**
 * FFXIV Sightseeing Log Tool - Main Application
 * 探索筆記工具主程式
 */

(function() {
    'use strict';

    // === 狀態管理 ===
    const state = {
        logs: [],
        filteredLogs: [],
        completedLogs: new Set(),
        filters: {
            search: '',
            region: '',
            hideCompleted: false,
            hideInactive: false,
            sortByTime: false
        }
    };

    // === DOM 元素快取 ===
    const elements = {
        eorzeaTime: null,
        localTime: null,
        weatherCountdown: null,
        searchInput: null,
        regionFilter: null,
        hideCompleted: null,
        hideInactive: null,
        sortByTime: null,
        logGrid: null,
        visibleCount: null,
        totalCount: null,
        completedCount: null,
        completedPercent: null,
        activeCount: null
    };

    // === 初始化 ===
    function init() {
        // 快取 DOM 元素
        cacheElements();

        // 載入已完成進度
        loadCompletedLogs();

        // 初始化資料
        state.logs = SightseeingData.getAll();

        // 初始化區域篩選器
        initRegionFilter();

        // 綁定事件
        bindEvents();

        // 初始渲染
        applyFilters();
        renderLogs();

        // 啟動時間更新
        updateTime();
        setInterval(updateTime, 1000);

        console.log('FFXIV Sightseeing Tool initialized');
    }

    // === DOM 元素快取 ===
    function cacheElements() {
        elements.eorzeaTime = document.getElementById('eorzea-time');
        elements.localTime = document.getElementById('local-time');
        elements.weatherCountdown = document.getElementById('weather-countdown');
        elements.searchInput = document.getElementById('search-input');
        elements.regionFilter = document.getElementById('region-filter');
        elements.hideCompleted = document.getElementById('hide-completed');
        elements.hideInactive = document.getElementById('hide-inactive');
        elements.sortByTime = document.getElementById('sort-by-time');
        elements.logGrid = document.getElementById('log-grid');
        elements.visibleCount = document.getElementById('visible-count');
        elements.totalCount = document.getElementById('total-count');
        elements.completedCount = document.getElementById('completed-count');
        elements.completedPercent = document.getElementById('completed-percent');
        elements.activeCount = document.getElementById('active-count');
    }

    // === 事件綁定 ===
    function bindEvents() {
        // 搜尋
        elements.searchInput.addEventListener('input', debounce(function() {
            state.filters.search = this.value.toLowerCase().trim();
            applyFilters();
            renderLogs();
        }, 200));

        // 區域篩選
        elements.regionFilter.addEventListener('change', function() {
            state.filters.region = this.value;
            applyFilters();
            renderLogs();
        });

        // 隱藏已完成
        elements.hideCompleted.addEventListener('change', function() {
            state.filters.hideCompleted = this.checked;
            applyFilters();
            renderLogs();
        });

        // 僅顯示可進行
        elements.hideInactive.addEventListener('change', function() {
            state.filters.hideInactive = this.checked;
            applyFilters();
            renderLogs();
        });

        // 依時間排序
        elements.sortByTime.addEventListener('change', function() {
            state.filters.sortByTime = this.checked;
            applyFilters();
            renderLogs();
        });

        // 事件委派 - 卡片按鈕
        elements.logGrid.addEventListener('click', handleCardClick);
    }

    // === 初始化區域篩選器 ===
    function initRegionFilter() {
        const regions = SightseeingData.getAllRegions();
        const fragment = document.createDocumentFragment();

        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = SightseeingData.getRegionNameTC(region);
            fragment.appendChild(option);
        });

        elements.regionFilter.appendChild(fragment);
    }

    // === 時間更新 ===
    function updateTime() {
        const now = Date.now();

        // 艾歐澤亞時間
        const eorzeaTime = EorzeaTime.getCurrentEorzeaTime(now);
        elements.eorzeaTime.textContent = EorzeaTime.formatTime(eorzeaTime);

        // 現實時間
        const localDate = new Date(now);
        elements.localTime.textContent =
            localDate.getHours().toString().padStart(2, '0') + ':' +
            localDate.getMinutes().toString().padStart(2, '0');

        // 下次天氣變化倒計時
        const weatherCountdown = EorzeaTime.getTimeUntilNextWeather(now);
        elements.weatherCountdown.textContent = weatherCountdown.formatted;

        // 更新活躍狀態
        updateActiveStatus();
    }

    // === 更新活躍狀態 ===
    function updateActiveStatus() {
        const now = Date.now();
        const eorzeaTime = EorzeaTime.getCurrentEorzeaTime(now);
        let activeCount = 0;

        state.filteredLogs.forEach(log => {
            const card = document.querySelector(`[data-log-id="${log.id}"]`);
            if (!card) return;

            const isActive = checkLogActive(log, eorzeaTime, now);

            if (isActive) {
                activeCount++;
                card.classList.add('active');
                card.querySelector('.status-badge')?.classList.remove('waiting');
                card.querySelector('.status-badge')?.classList.add('available');
                const statusText = card.querySelector('.status-badge');
                if (statusText) statusText.textContent = '可進行';
            } else {
                card.classList.remove('active');
                card.querySelector('.status-badge')?.classList.remove('available');
                card.querySelector('.status-badge')?.classList.add('waiting');
                const statusText = card.querySelector('.status-badge');
                if (statusText) statusText.textContent = '等待中';
            }

            // 更新倒計時
            updateLogCountdown(card, log, eorzeaTime, now);
        });

        elements.activeCount.textContent = activeCount;
    }

    // === 檢查探索筆記是否可進行 ===
    function checkLogActive(log, eorzeaTime, timestamp) {
        // 檢查時間
        const currentTimeValue = eorzeaTime.hours * 100 + eorzeaTime.minutes;
        let timeOk = false;

        if (log.time.start > log.time.end) {
            // 跨越午夜
            timeOk = currentTimeValue >= log.time.start || currentTimeValue <= log.time.end;
        } else {
            timeOk = currentTimeValue >= log.time.start && currentTimeValue <= log.time.end;
        }

        if (!timeOk) return false;

        // 檢查天氣
        if (log.weather && log.weather.length > 0) {
            const currentWeather = Weather.getWeatherForZone(log.region, Math.floor(timestamp / 1000));
            if (!log.weather.includes(currentWeather)) {
                return false;
            }
        }

        return true;
    }

    // === 更新探索筆記倒計時 ===
    function updateLogCountdown(card, log, eorzeaTime, timestamp) {
        const countdownEl = card.querySelector('.countdown');
        if (!countdownEl) return;

        const isActive = checkLogActive(log, eorzeaTime, timestamp);

        if (isActive) {
            countdownEl.textContent = '現在可進行';
            countdownEl.className = 'countdown soon';
            return;
        }

        // 計算到下一個可進行時間
        const waitInfo = calculateWaitTime(log, timestamp);

        if (waitInfo.ms < 5 * 60 * 1000) { // 5 分鐘內
            countdownEl.className = 'countdown soon';
        } else {
            countdownEl.className = 'countdown later';
        }

        countdownEl.textContent = EorzeaTime.formatWaitTime(waitInfo.ms);
    }

    // === 計算等待時間 ===
    function calculateWaitTime(log, timestamp) {
        // 先計算時間條件的等待
        const timeWait = EorzeaTime.getTimeUntilRange(log.time.start, log.time.end, timestamp);

        if (!log.weather || log.weather.length === 0) {
            // 統一返回 ms 屬性
            return { ms: timeWait.waitMs || 0, inRange: timeWait.inRange };
        }

        // 如果有天氣條件，需要找到同時滿足時間和天氣的時間點
        const nextWeather = Weather.findNextWeather(log.region, log.weather, 100);

        if (!nextWeather) {
            // 找不到符合的天氣，返回一個大數值
            return { ms: 24 * 60 * 60 * 1000, reason: 'weather' }; // 24小時
        }

        // 返回較晚的時間
        if (timeWait.inRange) {
            return { ms: Math.max(0, nextWeather.msUntil || 0), reason: 'weather' };
        }

        return { ms: Math.max(timeWait.waitMs || 0, nextWeather.msUntil || 0), reason: 'both' };
    }

    // === 套用篩選 ===
    function applyFilters() {
        let filtered = [...state.logs];
        const now = Date.now();
        const eorzeaTime = EorzeaTime.getCurrentEorzeaTime(now);

        // 搜尋
        if (state.filters.search) {
            const search = state.filters.search;
            filtered = filtered.filter(log =>
                SightseeingData.getLogName(log).toLowerCase().includes(search) ||
                SightseeingData.getRegionNameTC(log.region).toLowerCase().includes(search) ||
                log.location.toLowerCase().includes(search)
            );
        }

        // 區域
        if (state.filters.region) {
            filtered = filtered.filter(log => log.region === state.filters.region);
        }

        // 隱藏已完成
        if (state.filters.hideCompleted) {
            filtered = filtered.filter(log => !state.completedLogs.has(log.id));
        }

        // 僅顯示可進行
        if (state.filters.hideInactive) {
            filtered = filtered.filter(log => checkLogActive(log, eorzeaTime, now));
        }

        // 依時間排序
        if (state.filters.sortByTime) {
            filtered.sort((a, b) => {
                const waitA = calculateWaitTime(a, now);
                const waitB = calculateWaitTime(b, now);
                return waitA.ms - waitB.ms;
            });
        }

        state.filteredLogs = filtered;
        updateStats();
    }

    // === 更新統計 ===
    function updateStats() {
        const now = Date.now();
        const eorzeaTime = EorzeaTime.getCurrentEorzeaTime(now);

        elements.visibleCount.textContent = state.filteredLogs.length;
        elements.totalCount.textContent = state.logs.length;
        elements.completedCount.textContent = state.completedLogs.size;
        elements.completedPercent.textContent = Math.round(state.completedLogs.size / state.logs.length * 100);

        const activeCount = state.filteredLogs.filter(log =>
            checkLogActive(log, eorzeaTime, now)
        ).length;
        elements.activeCount.textContent = activeCount;
    }

    // === 渲染探索筆記 ===
    function renderLogs() {
        if (state.filteredLogs.length === 0) {
            elements.logGrid.innerHTML = `
                <div class="empty-state">
                    <h3>找不到符合條件的探索筆記</h3>
                    <p>請嘗試調整篩選條件</p>
                </div>
            `;
            return;
        }

        const now = Date.now();
        const eorzeaTime = EorzeaTime.getCurrentEorzeaTime(now);
        const fragment = document.createDocumentFragment();

        state.filteredLogs.forEach(log => {
            const card = createLogCard(log, eorzeaTime, now);
            fragment.appendChild(card);
        });

        elements.logGrid.innerHTML = '';
        elements.logGrid.appendChild(fragment);
    }

    // === 創建探索筆記卡片 ===
    function createLogCard(log, eorzeaTime, timestamp) {
        const isActive = checkLogActive(log, eorzeaTime, timestamp);
        const isCompleted = state.completedLogs.has(log.id);
        const waitInfo = calculateWaitTime(log, timestamp);

        const card = document.createElement('div');
        card.className = `log-card${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`;
        card.dataset.logId = log.id;

        // 時間顯示
        const timeStart = formatGameTime(log.time.start);
        const timeEnd = formatGameTime(log.time.end);

        // 天氣顯示
        let weatherHtml = '<span class="weather-tag any">任何天氣</span>';
        if (log.weather && log.weather.length > 0) {
            weatherHtml = log.weather.map(w => {
                const iconUrl = Weather.getWeatherIconUrl(w);
                const name = Weather.getWeatherNameTC(w);
                return `<span class="weather-tag"><img src="${iconUrl}" alt="${name}">${name}</span>`;
            }).join('');
        }

        // 當前天氣
        const currentWeather = Weather.getWeatherForZone(log.region, Math.floor(timestamp / 1000));
        const currentWeatherIcon = Weather.getWeatherIconUrl(currentWeather);
        const currentWeatherName = Weather.getWeatherNameTC(currentWeather);

        card.innerHTML = `
            <div class="log-header">
                <span class="log-number">#${log.id}</span>
                <div class="log-status">
                    <span class="status-badge ${isActive ? 'available' : 'waiting'}">
                        ${isActive ? '可進行' : '等待中'}
                    </span>
                </div>
            </div>
            <div class="log-body">
                <div class="log-name">${SightseeingData.getLogName(log)}</div>
                <div class="log-location">
                    <span class="region">${SightseeingData.getRegionNameTC(log.region)}</span>
                    - ${log.location}
                </div>
                <div class="log-coords">
                    X: ${log.x.toFixed(1)}, Y: ${log.y.toFixed(1)}
                </div>
                <div class="log-details">
                    <div class="detail-item">
                        <span class="detail-label">時間</span>
                        <span class="detail-value">${timeStart} - ${timeEnd}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">天氣</span>
                        <span class="detail-value weather-icons">${weatherHtml}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">表情</span>
                        <span class="detail-value">/${log.emote} (${SightseeingData.getEmoteNameTC(log.emote)})</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">倒計時</span>
                        <span class="detail-value countdown ${isActive ? 'soon' : 'later'}">
                            ${isActive ? '現在可進行' : EorzeaTime.formatWaitTime(waitInfo.ms)}
                        </span>
                    </div>
                </div>
            </div>
            <div class="log-footer">
                <button class="complete-btn${isCompleted ? ' completed' : ''}" data-action="complete">
                    ${isCompleted ? '✓ 已完成' : '標記完成'}
                </button>
                <button class="copy-btn" data-action="copy" data-flag="/flag ${SightseeingData.getRegionNameTC(log.region)} (X:${log.x.toFixed(1)}, Y:${log.y.toFixed(1)})">
                    複製座標
                </button>
            </div>
        `;

        return card;
    }

    // === 格式化遊戲時間 ===
    function formatGameTime(time) {
        const hours = Math.floor(time / 100);
        const minutes = time % 100;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    // === 處理卡片點擊 ===
    function handleCardClick(event) {
        const button = event.target.closest('[data-action]');
        if (!button) return;

        const card = button.closest('.log-card');
        const logId = parseInt(card.dataset.logId);
        const action = button.dataset.action;

        switch (action) {
            case 'complete':
                toggleComplete(logId, button);
                break;
            case 'copy':
                copyToClipboard(button.dataset.flag, button);
                break;
        }
    }

    // === 切換完成狀態 ===
    function toggleComplete(logId, button) {
        if (state.completedLogs.has(logId)) {
            state.completedLogs.delete(logId);
            button.classList.remove('completed');
            button.textContent = '標記完成';
            button.closest('.log-card').classList.remove('completed');
        } else {
            state.completedLogs.add(logId);
            button.classList.add('completed');
            button.textContent = '✓ 已完成';
            button.closest('.log-card').classList.add('completed');
        }

        saveCompletedLogs();
        updateStats();

        // 如果隱藏已完成，重新渲染
        if (state.filters.hideCompleted) {
            applyFilters();
            renderLogs();
        }
    }

    // === 複製到剪貼簿 ===
    async function copyToClipboard(text, button) {
        try {
            await navigator.clipboard.writeText(text);
            button.classList.add('copied');
            const originalText = button.textContent;
            button.textContent = '已複製';
            setTimeout(() => {
                button.classList.remove('copied');
                button.textContent = originalText;
            }, 1500);
        } catch (err) {
            console.error('複製失敗:', err);
        }
    }

    // === 儲存已完成進度 ===
    function saveCompletedLogs() {
        const data = Array.from(state.completedLogs);
        localStorage.setItem('ffxiv-sightseeing-completed', JSON.stringify(data));
    }

    // === 載入已完成進度 ===
    function loadCompletedLogs() {
        try {
            const data = localStorage.getItem('ffxiv-sightseeing-completed');
            if (data) {
                const ids = JSON.parse(data);
                state.completedLogs = new Set(ids);
            }
        } catch (err) {
            console.error('載入進度失敗:', err);
        }
    }

    // === 防抖函數 ===
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // === 啟動應用 ===
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
