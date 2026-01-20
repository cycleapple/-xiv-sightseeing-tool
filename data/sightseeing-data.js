/**
 * FFXIV Sightseeing Log Data
 * 探索筆記資料
 *
 * 名稱來源：data/names-tc.js (從 datamining 提取的繁中對照表)
 *
 * 時間格式：HHMM (例如 800 = 08:00, 1200 = 12:00)
 * 天氣：英文名稱，對應 weather.js 中的定義
 */

const SightseeingData = (function() {
    'use strict';

    // 探索筆記資料
    // adventureId: 用於查詢 NamesTW 的名稱對照表
    // 編號 1-80: 新生時代 (ARR)
    // 編號 81+: 蒼天時代 (HW)
    const logs = [
        // === 新生時代 探索筆記 001-020 ===
        {
            id: 1,
            adventureId: 2162688,
            region: "Limsa Lominsa",
            location: "利姆薩·羅敏薩下層甲板",
            x: 9.5,
            y: 7.6,
            time: { start: 800, end: 1200 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 2,
            adventureId: 2162689,
            region: "Limsa Lominsa",
            location: "利姆薩·羅敏薩下層甲板",
            x: 7.1,
            y: 15.0,
            time: { start: 1800, end: 500 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 3,
            adventureId: 2162690,
            region: "Middle La Noscea",
            location: "中拉諾西亞",
            x: 20.3,
            y: 19.1,
            time: { start: 500, end: 800 },
            weather: ["Rain", "Showers"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 4,
            adventureId: 2162691,
            region: "Lower La Noscea",
            location: "拉諾西亞低地",
            x: 23.9,
            y: 40.2,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 5,
            adventureId: 2162692,
            region: "Lower La Noscea",
            location: "拉諾西亞低地",
            x: 33.5,
            y: 19.0,
            time: { start: 800, end: 1200 },
            weather: ["Clouds"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 6,
            adventureId: 2162693,
            region: "Eastern La Noscea",
            location: "東拉諾西亞",
            x: 32.6,
            y: 23.2,
            time: { start: 1800, end: 500 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 7,
            adventureId: 2162694,
            region: "Eastern La Noscea",
            location: "東拉諾西亞",
            x: 20.3,
            y: 26.4,
            time: { start: 500, end: 800 },
            weather: ["Fog"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 8,
            adventureId: 2162695,
            region: "Western La Noscea",
            location: "西拉諾西亞",
            x: 29.0,
            y: 30.4,
            time: { start: 500, end: 800 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 9,
            adventureId: 2162696,
            region: "Gridania",
            location: "格里達尼亞新街",
            x: 12.7,
            y: 8.0,
            time: { start: 1200, end: 1700 },
            weather: ["Clouds"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 10,
            adventureId: 2162697,
            region: "Gridania",
            location: "格里達尼亞舊街",
            x: 10.3,
            y: 6.2,
            time: { start: 1800, end: 500 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 11,
            adventureId: 2162698,
            region: "Central Shroud",
            location: "黑衣森林中央林區",
            x: 21.0,
            y: 21.9,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "sit",
            expansion: "arr"
        },
        {
            id: 12,
            adventureId: 2162699,
            region: "Central Shroud",
            location: "黑衣森林中央林區",
            x: 20.0,
            y: 30.1,
            time: { start: 800, end: 1200 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 13,
            adventureId: 2162700,
            region: "Ul'dah",
            location: "烏爾達哈現世回廊",
            x: 10.3,
            y: 12.5,
            time: { start: 800, end: 1200 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 14,
            adventureId: 2162701,
            region: "Ul'dah",
            location: "烏爾達哈現世回廊",
            x: 10.8,
            y: 8.6,
            time: { start: 1700, end: 1800 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 15,
            adventureId: 2162702,
            region: "Ul'dah",
            location: "烏爾達哈來生回廊",
            x: 11.5,
            y: 11.2,
            time: { start: 1800, end: 500 },
            weather: ["Clouds"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 16,
            adventureId: 2162703,
            region: "Western Thanalan",
            location: "西薩納蘭",
            x: 13.9,
            y: 7.2,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 17,
            adventureId: 2162704,
            region: "Western Thanalan",
            location: "西薩納蘭",
            x: 8.0,
            y: 5.9,
            time: { start: 1700, end: 1800 },
            weather: ["Fog"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 18,
            adventureId: 2162705,
            region: "Western Thanalan",
            location: "西薩納蘭",
            x: 22.4,
            y: 22.1,
            time: { start: 500, end: 800 },
            weather: ["Rain", "Showers"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 19,
            adventureId: 2162706,
            region: "Central Thanalan",
            location: "中薩納蘭",
            x: 24.2,
            y: 25.9,
            time: { start: 1200, end: 1700 },
            weather: ["Clouds"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 20,
            adventureId: 2162707,
            region: "Central Thanalan",
            location: "中薩納蘭",
            x: 15.4,
            y: 22.1,
            time: { start: 800, end: 1200 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },

        // === 新生時代 探索筆記 021-040 ===
        {
            id: 21,
            adventureId: 2162708,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 19.4,
            y: 24.7,
            time: { start: 1200, end: 1700 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 22,
            adventureId: 2162709,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 10.5,
            y: 21.2,
            time: { start: 500, end: 800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "sit",
            expansion: "arr"
        },
        {
            id: 23,
            adventureId: 2162710,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 30.8,
            y: 20.9,
            time: { start: 800, end: 1200 },
            weather: ["Fog"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 24,
            adventureId: 2162711,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 14.3,
            y: 30.8,
            time: { start: 1200, end: 1700 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "sit",
            expansion: "arr"
        },
        {
            id: 25,
            adventureId: 2162712,
            region: "Northern Thanalan",
            location: "北薩納蘭",
            x: 21.6,
            y: 22.2,
            time: { start: 1700, end: 1800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 26,
            adventureId: 2162713,
            region: "Upper La Noscea",
            location: "拉諾西亞高地",
            x: 28.8,
            y: 22.1,
            time: { start: 800, end: 1200 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 27,
            adventureId: 2162714,
            region: "East Shroud",
            location: "黑衣森林東部林區",
            x: 17.0,
            y: 18.3,
            time: { start: 1200, end: 1700 },
            weather: ["Thunder", "Thunderstorms"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 28,
            adventureId: 2162715,
            region: "South Shroud",
            location: "黑衣森林南部林區",
            x: 33.1,
            y: 23.4,
            time: { start: 500, end: 800 },
            weather: ["Thunder", "Thunderstorms"],
            emote: "doze",
            expansion: "arr"
        },
        {
            id: 29,
            adventureId: 2162716,
            region: "South Shroud",
            location: "黑衣森林南部林區",
            x: 21.0,
            y: 19.3,
            time: { start: 1700, end: 1800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 30,
            adventureId: 2162717,
            region: "Outer La Noscea",
            location: "拉諾西亞外地",
            x: 13.1,
            y: 15.4,
            time: { start: 1800, end: 500 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "sit",
            expansion: "arr"
        },
        {
            id: 31,
            adventureId: 2162718,
            region: "Mor Dhona",
            location: "摩杜納",
            x: 18.6,
            y: 17.7,
            time: { start: 1700, end: 1800 },
            weather: ["Gloom"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 32,
            adventureId: 2162719,
            region: "Mor Dhona",
            location: "摩杜納",
            x: 31.8,
            y: 13.9,
            time: { start: 500, end: 800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 33,
            adventureId: 2162720,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 7.6,
            y: 28.8,
            time: { start: 1200, end: 1700 },
            weather: ["Blizzards"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 34,
            adventureId: 2162721,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 4.7,
            y: 21.7,
            time: { start: 1700, end: 1800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 35,
            adventureId: 2162722,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 26.4,
            y: 17.2,
            time: { start: 800, end: 1200 },
            weather: ["Snow"],
            emote: "salute",
            expansion: "arr"
        },
        {
            id: 36,
            adventureId: 2162723,
            region: "Western La Noscea",
            location: "西拉諾西亞",
            x: 13.6,
            y: 36.3,
            time: { start: 1700, end: 1800 },
            weather: ["Gales"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 37,
            adventureId: 2162724,
            region: "Upper La Noscea",
            location: "拉諾西亞高地",
            x: 30.8,
            y: 24.6,
            time: { start: 1800, end: 500 },
            weather: ["Thunderstorms"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 38,
            adventureId: 2162725,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 28.4,
            y: 22.4,
            time: { start: 1800, end: 500 },
            weather: ["Rain", "Showers"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 39,
            adventureId: 2162726,
            region: "South Shroud",
            location: "黑衣森林南部林區",
            x: 17.6,
            y: 20.1,
            time: { start: 1200, end: 1700 },
            weather: ["Rain"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 40,
            adventureId: 2162727,
            region: "Outer La Noscea",
            location: "拉諾西亞外地",
            x: 12.6,
            y: 16.5,
            time: { start: 500, end: 800 },
            weather: ["Rain"],
            emote: "kneel",
            expansion: "arr"
        },

        // === 新生時代 探索筆記 041-080 (部分) ===
        {
            id: 41,
            adventureId: 2162728,
            region: "Eastern La Noscea",
            location: "東拉諾西亞",
            x: 17.2,
            y: 32.7,
            time: { start: 1800, end: 500 },
            weather: ["Rain"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 42,
            adventureId: 2162729,
            region: "North Shroud",
            location: "黑衣森林北部林區",
            x: 18.2,
            y: 19.1,
            time: { start: 800, end: 1200 },
            weather: ["Fog"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 43,
            adventureId: 2162730,
            region: "Upper La Noscea",
            location: "拉諾西亞高地",
            x: 28.2,
            y: 25.3,
            time: { start: 1200, end: 1700 },
            weather: ["Fog"],
            emote: "kneel",
            expansion: "arr"
        },
        {
            id: 44,
            adventureId: 2162731,
            region: "North Shroud",
            location: "黑衣森林北部林區",
            x: 15.1,
            y: 32.9,
            time: { start: 1800, end: 500 },
            weather: ["Fog"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 45,
            adventureId: 2162732,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 24.0,
            y: 39.8,
            time: { start: 1700, end: 1800 },
            weather: ["Dust Storms"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 46,
            adventureId: 2162733,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 32.7,
            y: 6.7,
            time: { start: 1800, end: 500 },
            weather: ["Fog"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 47,
            adventureId: 2162734,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 14.4,
            y: 18.6,
            time: { start: 500, end: 800 },
            weather: null,
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 48,
            adventureId: 2162735,
            region: "Central Shroud",
            location: "黑衣森林中央林區",
            x: 25.6,
            y: 25.9,
            time: { start: 1200, end: 1700 },
            weather: null,
            emote: "sit",
            expansion: "arr"
        },
        {
            id: 49,
            adventureId: 2162736,
            region: "South Shroud",
            location: "黑衣森林南部林區",
            x: 32.6,
            y: 24.6,
            time: { start: 1800, end: 500 },
            weather: null,
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 50,
            adventureId: 2162737,
            region: "Middle La Noscea",
            location: "中拉諾西亞",
            x: 25.1,
            y: 27.2,
            time: { start: 500, end: 800 },
            weather: null,
            emote: "point",
            expansion: "arr"
        },
        // === 新生時代 探索筆記 051-060 ===
        {
            id: 51,
            adventureId: 2162738,
            region: "Western Thanalan",
            location: "西薩納蘭",
            x: 8.8,
            y: 5.2,
            time: { start: 1700, end: 1800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 52,
            adventureId: 2162739,
            region: "Western Thanalan",
            location: "西薩納蘭",
            x: 12.5,
            y: 14.9,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "point",
            expansion: "arr"
        },
        {
            id: 53,
            adventureId: 2162740,
            region: "Central Thanalan",
            location: "中薩納蘭",
            x: 21.4,
            y: 17.6,
            time: { start: 1800, end: 500 },
            weather: ["Dust Storms"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 54,
            adventureId: 2162741,
            region: "Central Thanalan",
            location: "中薩納蘭",
            x: 18.6,
            y: 26.2,
            time: { start: 1200, end: 1700 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "sit",
            expansion: "arr"
        },
        {
            id: 55,
            adventureId: 2162742,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 30.8,
            y: 26.5,
            time: { start: 1200, end: 1700 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 56,
            adventureId: 2162743,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 10.0,
            y: 16.7,
            time: { start: 800, end: 1200 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 57,
            adventureId: 2162744,
            region: "Eastern Thanalan",
            location: "東薩納蘭",
            x: 25.2,
            y: 14.7,
            time: { start: 1800, end: 500 },
            weather: ["Showers"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 58,
            adventureId: 2162745,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 12.2,
            y: 22.9,
            time: { start: 500, end: 800 },
            weather: ["Fog"],
            emote: "pray",
            expansion: "arr"
        },
        {
            id: 59,
            adventureId: 2162746,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 19.3,
            y: 20.6,
            time: { start: 500, end: 800 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 60,
            adventureId: 2162747,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 21.4,
            y: 38.7,
            time: { start: 1200, end: 1700 },
            weather: ["Heat Waves"],
            emote: "lookout",
            expansion: "arr"
        },
        // === 新生時代 探索筆記 061-070 ===
        {
            id: 61,
            adventureId: 2162748,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 23.8,
            y: 11.9,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 62,
            adventureId: 2162749,
            region: "Southern Thanalan",
            location: "南薩納蘭",
            x: 14.7,
            y: 26.6,
            time: { start: 500, end: 800 },
            weather: ["Heat Waves"],
            emote: "psych",
            expansion: "arr"
        },
        {
            id: 63,
            adventureId: 2162750,
            region: "Northern Thanalan",
            location: "北薩納蘭",
            x: 22.3,
            y: 25.8,
            time: { start: 500, end: 800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "salute",
            expansion: "arr"
        },
        {
            id: 64,
            adventureId: 2162751,
            region: "Northern Thanalan",
            location: "北薩納蘭",
            x: 20.7,
            y: 29.6,
            time: { start: 1800, end: 500 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 65,
            adventureId: 2162752,
            region: "Northern Thanalan",
            location: "北薩納蘭",
            x: 20.9,
            y: 22.5,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 66,
            adventureId: 2162753,
            region: "Northern Thanalan",
            location: "北薩納蘭",
            x: 20.0,
            y: 17.7,
            time: { start: 800, end: 1200 },
            weather: ["Clouds"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 67,
            adventureId: 2162754,
            region: "Northern Thanalan",
            location: "北薩納蘭",
            x: 26.5,
            y: 22.8,
            time: { start: 1800, end: 500 },
            weather: ["Fog"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 68,
            adventureId: 2162755,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 25.5,
            y: 29.9,
            time: { start: 1700, end: 1800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 69,
            adventureId: 2162756,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 25.5,
            y: 29.8,
            time: { start: 1800, end: 500 },
            weather: ["Fog"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 70,
            adventureId: 2162757,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 11.8,
            y: 15.9,
            time: { start: 800, end: 1200 },
            weather: ["Blizzards"],
            emote: "lookout",
            expansion: "arr"
        },
        // === 新生時代 探索筆記 071-080 ===
        {
            id: 71,
            adventureId: 2162758,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 12.8,
            y: 17.3,
            time: { start: 500, end: 800 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 72,
            adventureId: 2162759,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 7.8,
            y: 29.0,
            time: { start: 1700, end: 1800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 73,
            adventureId: 2162760,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 8.0,
            y: 31.4,
            time: { start: 1800, end: 500 },
            weather: ["Blizzards", "Snow"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 74,
            adventureId: 2162761,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 2.2,
            y: 21.3,
            time: { start: 800, end: 1200 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 75,
            adventureId: 2162762,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 26.6,
            y: 17.8,
            time: { start: 1200, end: 1700 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 76,
            adventureId: 2162763,
            region: "Coerthas Central Highlands",
            location: "庫爾札斯中央高地",
            x: 28.3,
            y: 10.4,
            time: { start: 500, end: 800 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 77,
            adventureId: 2162764,
            region: "Mor Dhona",
            location: "摩杜納",
            x: 9.9,
            y: 13.6,
            time: { start: 1200, end: 1700 },
            weather: ["Gloom"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 78,
            adventureId: 2162765,
            region: "Mor Dhona",
            location: "摩杜納",
            x: 27.5,
            y: 8.1,
            time: { start: 1800, end: 500 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 79,
            adventureId: 2162766,
            region: "Mor Dhona",
            location: "摩杜納",
            x: 18.7,
            y: 17.7,
            time: { start: 1200, end: 1700 },
            weather: ["Clear Skies", "Fair Skies"],
            emote: "lookout",
            expansion: "arr"
        },
        {
            id: 80,
            adventureId: 2162767,
            region: "Mor Dhona",
            location: "摩杜納",
            x: 26.2,
            y: 11.3,
            time: { start: 1700, end: 1800 },
            weather: ["Fair Skies", "Clear Skies"],
            emote: "sit",
            expansion: "arr"
        }
    ];

    /**
     * 獲取探索筆記名稱
     * @param {Object} log - 探索筆記物件
     * @returns {string}
     */
    function getLogName(log) {
        return NamesTW.getAdventureName(log.adventureId);
    }

    /**
     * 獲取區域名稱
     * @param {string} region - 英文區域名稱
     * @returns {string}
     */
    function getRegionNameTC(region) {
        return NamesTW.getRegionName(region);
    }

    /**
     * 獲取表情名稱
     * @param {string} emote - 英文表情指令
     * @returns {string}
     */
    function getEmoteNameTC(emote) {
        return NamesTW.getEmoteName(emote);
    }

    /**
     * 獲取表情指令
     * @param {string} emote - 英文表情指令
     * @returns {string}
     */
    function getEmoteCommand(emote) {
        return `/${emote}`;
    }

    /**
     * 獲取所有探索筆記
     * @returns {Array}
     */
    function getAll() {
        return logs;
    }

    /**
     * 依 ID 獲取探索筆記
     * @param {number} id
     * @returns {Object|null}
     */
    function getById(id) {
        return logs.find(log => log.id === id) || null;
    }

    /**
     * 依版本獲取探索筆記
     * @param {string} expansion - arr, hw, sb, shb, ew, dt
     * @returns {Array}
     */
    function getByExpansion(expansion) {
        return logs.filter(log => log.expansion === expansion);
    }

    /**
     * 依區域獲取探索筆記
     * @param {string} region
     * @returns {Array}
     */
    function getByRegion(region) {
        return logs.filter(log => log.region === region);
    }

    /**
     * 獲取所有區域列表
     * @returns {Array}
     */
    function getAllRegions() {
        const regions = [...new Set(logs.map(log => log.region))];
        return regions.sort();
    }

    // 公開 API
    return {
        logs,
        getLogName,
        getRegionNameTC,
        getEmoteNameTC,
        getEmoteCommand,
        getAll,
        getById,
        getByExpansion,
        getByRegion,
        getAllRegions
    };
})();

// 如果在 Node.js 環境中，導出模組
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SightseeingData;
}
