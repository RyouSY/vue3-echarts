export const optionHandle = (regionCode, mapData) => {
	return {
		tooltip: {
			trigger: 'item',
			formatter: function(params) {
				if (params.data) {
					return `${params.name}<br/>${params.data["value"]} 万元`
				} else {
					return `${params.name}<br/>暂无数据`;
				}
			}
		},
		visualMap: [{
			type: 'continuous',
			min: 0,
			max: 1000,
			left: 20,
			bottom: 20,
			text: ['高', '低'],
			textStyle: {
				color: "#fff"
			},
			inRange: {
				color: [
					"rgba(237,247,253,.8)",
					"rgba(183,225,246,.9)",
					"rgba(129,202,239,.9)",
					"rgba(56,172,229,.9)",
					"rgba(23,129,181,.9)",
					"rgba(16,90,126,0.9)"
				],
			},
		}],
		series: [{
			type: 'map',
			selectedMode: false,
			name: "降水量",
			map: regionCode,
			roam: true,
			zoom: 1.1,
			label: {
				show: false,
				color: "#fff"
			},
			itemStyle: {
				borderColor: "rgba(147, 235, 248, .8)",
				borderWidth: 1,
				areaColor: {
					type: "radial",
					x: 0.5,
					y: 0.5,
					r: 0.8,
					colorStops: [{
							offset: 0,
							color: "rgba(147, 235, 248, 0)",
						},
						{
							offset: 1,
							color: "rgba(147, 235, 248, .2)",
						},
					],
					globalCoord: false,
				},
				shadowColor: "rgba(128, 217, 248, .3)",
				shadowOffsetX: -2,
				shadowOffsetY: 2,
				shadowBlur: 10,
			},
			emphasis: {
				label: {
					show: false,
				},
				itemStyle: {
					areaColor: {
						type: "radial",
						x: 0.5,
						y: 0.5,
						r: 0.8,
						colorStops: [{
								offset: 0,
								color: "rgba(147, 235, 248, 0)",
							},
							{
								offset: 1,
								color: "rgba(56,155,183, .8)",
							},
						],
						globalCoord: false,
					},
					borderWidth: 1,
				},
			},
			data: mapData,
		}],
	}
}

export const regionCodes = {
    "中国": {
        "adcode": "100000",
        "level": "country",
        "name": "中华人民共和国"
    },
    "新疆维吾尔自治区": {
        "adcode": "650000",
        "level": "province",
        "name": "新疆维吾尔自治区"
    },
    "湖北省": {
        "adcode": "420000",
        "level": "province",
        "name": "湖北省"
    },
    "辽宁省": {
        "adcode": "210000",
        "level": "province",
        "name": "辽宁省"
    },
    "广东省": {
        "adcode": "440000",
        "level": "province",
        "name": "广东省"
    },
    "内蒙古自治区": {
        "adcode": "150000",
        "level": "province",
        "name": "内蒙古自治区"
    },
    "黑龙江省": {
        "adcode": "230000",
        "level": "province",
        "name": "黑龙江省"
    },
    "河南省": {
        "adcode": "410000",
        "level": "province",
        "name": "河南省"
    },
    "山东省": {
        "adcode": "370000",
        "level": "province",
        "name": "山东省"
    },
    "陕西省": {
        "adcode": "610000",
        "level": "province",
        "name": "陕西省"
    },
    "贵州省": {
        "adcode": "520000",
        "level": "province",
        "name": "贵州省"
    },
    "上海市": {
        "adcode": "310000",
        "level": "province",
        "name": "上海市"
    },
    "重庆市": {
        "adcode": "500000",
        "level": "province",
        "name": "重庆市"
    },
    "西藏自治区": {
        "adcode": "540000",
        "level": "province",
        "name": "西藏自治区"
    },
    "安徽省": {
        "adcode": "340000",
        "level": "province",
        "name": "安徽省"
    },
    "福建省": {
        "adcode": "350000",
        "level": "province",
        "name": "福建省"
    },
    "湖南省": {
        "adcode": "430000",
        "level": "province",
        "name": "湖南省"
    },
    "海南省": {
        "adcode": "460000",
        "level": "province",
        "name": "海南省"
    },
    "江苏省": {
        "adcode": "320000",
        "level": "province",
        "name": "江苏省"
    },
    "青海省": {
        "adcode": "630000",
        "level": "province",
        "name": "青海省"
    },
    "广西壮族自治区": {
        "adcode": "450000",
        "level": "province",
        "name": "广西壮族自治区"
    },
    "宁夏回族自治区": {
        "adcode": "640000",
        "level": "province",
        "name": "宁夏回族自治区"
    },
    "浙江省": {
        "adcode": "330000",
        "level": "province",
        "name": "浙江省"
    },
    "河北省": {
        "adcode": "130000",
        "level": "province",
        "name": "河北省"
    },
    "香港特别行政区": {
        "adcode": "810000",
        "level": "province",
        "name": "香港特别行政区"
    },
    "台湾省": {
        "adcode": "710000",
        "level": "province",
        "name": "台湾省"
    },
    "澳门特别行政区": {
        "adcode": "820000",
        "level": "province",
        "name": "澳门特别行政区"
    },
    "甘肃省": {
        "adcode": "620000",
        "level": "province",
        "name": "甘肃省"
    },
    "四川省": {
        "adcode": "510000",
        "level": "province",
        "name": "四川省"
    },
    "天津市": {
        "adcode": "120000",
        "level": "province",
        "name": "天津市"
    },
    "江西省": {
        "adcode": "360000",
        "level": "province",
        "name": "江西省"
    },
    "云南省": {
        "adcode": "530000",
        "level": "province",
        "name": "云南省"
    },
    "山西省": {
        "adcode": "140000",
        "level": "province",
        "name": "山西省"
    },
    "北京市": {
        "adcode": "110000",
        "level": "province",
        "name": "北京市"
    },
    "吉林省": {
        "adcode": "220000",
        "level": "province",
        "name": "吉林省"
    }
}