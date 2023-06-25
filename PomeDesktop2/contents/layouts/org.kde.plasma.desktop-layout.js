var plasma = getApiVersion(1);

ColorAccetFile = ConfigFile("kdeglobals")
ColorAccetFile.group = "General"
ColorAccetFile.writeEntry("accentColorFromWallpaper", "true")

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "com.github.casout.wallpaperEngineKde"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "315",
                    "ToolBoxButtonY": "27",
                    "filterMimeTypes": "\\0",
                    "positions": "{\"1920x1080\":[]}",
                    "sortMode": "-1"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "displayPosition": "Center",
                            "favoritesPortedToKAstats": "true",
                            "floating": "true",
                            "launcherPosition": "2"
                        }
                    },
                    "plugin": "org.kde.plasma.dittomenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "75",
                            "popupHeight": "450",
                            "popupWidth": "396"
                        },
                        "/Appearance": {
                            "customDateFormat": "",
                            "showDate": "false"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                }
            },
            "height": 1.5,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "launchers": ""
                        },
                        "/General": {
                            "iconSpacing": "0",
                            "indicateAudioStreams": "false",
                            "launchers": "",
                            "maxStripes": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.trash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1080",
                    "DialogWidth": "248"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "autohide",
            "location": "right",
            "maximumLength": 60,
            "minimumLength": 60,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
