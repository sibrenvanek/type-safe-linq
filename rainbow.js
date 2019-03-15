const fs = require('fs');

function loop() {
	let settings = fs.readFileSync('./.vscode/settings.json');
	settings = JSON.parse(settings);
	let activitybarbackground = settings['workbench.colorCustomizations']['activityBar.background'];
	let titlebarbackground = settings['workbench.colorCustomizations']['titleBar.activeBackground'];
	let activitybarbackgroundRgb = hexToRgb(activitybarbackground);
	let titlebarbackgroundRgb = hexToRgb(titlebarbackground);
	activitybarbackgroundRgb = updateRgb(activitybarbackgroundRgb);
	titlebarbackgroundRgb = updateRgb(titlebarbackgroundRgb);
	settings['workbench.colorCustomizations']['activityBar.background'] = rgbToHex(activitybarbackgroundRgb);
	settings['workbench.colorCustomizations']['titleBar.activeBackground'] = rgbToHex(titlebarbackgroundRgb);
	if (activitybarbackgroundRgb.green > 127) {
		settings['workbench.colorCustomizations']['titleBar.activeForeground'] = "#000000";
		settings['workbench.colorCustomizations']['activityBar.foreground'] = "#000000";
	}
	else {
		settings['workbench.colorCustomizations']['titleBar.activeForeground'] = "#FDFAF6";
		settings['workbench.colorCustomizations']['activityBar.foreground'] = "#FDFAF6";
	}
	fs.writeFileSync('./.vscode/settings.json', JSON.stringify(settings, undefined, 4));
}

function componentToHex(c) {
	let hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
	return "#" + componentToHex(rgb.red) + componentToHex(rgb.green) + componentToHex(rgb.blue);
}

function hexToRgb(hex) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		red: parseInt(result[1], 16),
		green: parseInt(result[2], 16),
		blue: parseInt(result[3], 16)
	} : null;
}

let up = true;

function updateRgb(rgb) {
	if (rgb.red === 255 || !up) {
		if (rgb.green === 255 || !up) {
			if (rgb.blue === 255 || !up) {
				up = false;
				if (!(rgb.red > 0)) {
					if (!(rgb.green > 0)) {
						if (!(rgb.blue > 0)) {
							up = true;
						}
						else {
							rgb.blue--;
						}
					}
					else {
						rgb.green--;
					}
				}
				else {
					rgb.red--;
				}
			}
			else {
				rgb.blue++;
			}
		}
		else {
			rgb.green++;
		}
	}
	else {
		rgb.red++;
	}
	return rgb;
}
setInterval(loop, 100);