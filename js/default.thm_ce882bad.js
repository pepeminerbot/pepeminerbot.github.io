window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Common":"resource/eui_skins/Common.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 640;
		this.width = 640;
	}
	var _proto = Common.prototype;

	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 640;
		this.width = 640;
	}
	var _proto = Main.prototype;

	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._Label2_i()];
	}
	var _proto = Main.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -200;
		t.fillColor = 0x39963D;
		t.left = -200;
		t.right = -200;
		t.top = -200;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "qrcode_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 43.455;
		t.horizontalCenter = 0;
		t.stroke = 2;
		t.strokeColor = 0xFFFFFF;
		t.text = "PEPE Wallet Address:";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "bottom";
		t.verticalCenter = -186.5;
		t.width = 417.761;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 43.455;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0xFFFFFF;
		t.text = "0x24381e83b8e792c36029cb02c106b992b945eade";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 186.5;
		t.width = 866.761;
		return t;
	};
	return Main;
})(eui.Skin);