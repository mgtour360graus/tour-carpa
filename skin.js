// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: carpa.ggsk
// Generated 2025-02-23T01:38:45

function pano2vrSkin(player,base) {
	player.addVariable('var_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('var_respphone', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_inicial', 2, false, { ignoreInState: 0  });
	player.addVariable('var_audio', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_localizacao', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('var_help', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_hotspot_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_loader', 2, true, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_var_respphone = {};
		me._variable_var_respphone.ggCurrentLogicState = -1;
		me._variable_var_respphone.logicBlock = function() {
			var newLogicState_var_respphone;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicState_var_respphone = 0;
			}
			else {
				newLogicState_var_respphone = -1;
			}
			if (me._variable_var_respphone.ggCurrentLogicState != newLogicState_var_respphone) {
				me._variable_var_respphone.ggCurrentLogicState = newLogicState_var_respphone;
				if (me._variable_var_respphone.ggCurrentLogicState == 0) {
					player.setVariableValue('var_respphone', true);
				}
				else {
					player.setVariableValue('var_respphone', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width < 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me.__10barrasuperior=document.createElement('div');
		el.ggId="1.0-BARRASUPERIOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10barrasuperior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__10barrasuperior.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__10barrasuperior.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__10barrasuperior.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__10barrasuperior.style.transition='opacity 1000ms ease 4000ms';
				if (me.__10barrasuperior.ggCurrentLogicStateAlpha == 0) {
					me.__10barrasuperior.style.visibility=me.__10barrasuperior.ggVisible?'inherit':'hidden';
					me.__10barrasuperior.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__10barrasuperior.style.opacity == 0.0) { me.__10barrasuperior.style.visibility="hidden"; } }, 5005);
					me.__10barrasuperior.style.opacity=0;
				}
			}
		}
		me.__10barrasuperior.logicBlock_alpha();
		me.__10barrasuperior.ggUpdatePosition=function (useTransition) {
		}
		el=me.__100=document.createElement('div');
		el.ggId="1.0.0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ff8717;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__100.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__100.ggUpdatePosition=function (useTransition) {
		}
		me.__10barrasuperior.appendChild(me.__100);
		el=me.__101button_fullscreen=document.createElement('div');
		el.ggId="1.0.1-button_fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__101button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__101button_fullscreen.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_101button_fullscreen'] == true)) && 
				((player.getVariableValue('var_respphone') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__101button_fullscreen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__101button_fullscreen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__101button_fullscreen.style.transition='transform 500ms ease 0ms';
				if (me.__101button_fullscreen.ggCurrentLogicStateScaling == 0) {
					me.__101button_fullscreen.ggParameter.sx = 1.1;
					me.__101button_fullscreen.ggParameter.sy = 1.1;
					me.__101button_fullscreen.style.transform=parameterToTransform(me.__101button_fullscreen.ggParameter);
					setTimeout(function() {skin.updateSize(me.__101button_fullscreen);}, 550);
				}
				else {
					me.__101button_fullscreen.ggParameter.sx = 1;
					me.__101button_fullscreen.ggParameter.sy = 1;
					me.__101button_fullscreen.style.transform=parameterToTransform(me.__101button_fullscreen.ggParameter);
					setTimeout(function() {skin.updateSize(me.__101button_fullscreen);}, 550);
				}
			}
		}
		me.__101button_fullscreen.logicBlock_scaling();
		me.__101button_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__101button_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__101button_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__101button_fullscreen.style.transition='transform 500ms ease 0ms';
				if (me.__101button_fullscreen.ggCurrentLogicStateVisible == 0) {
					me.__101button_fullscreen.style.visibility="hidden";
					me.__101button_fullscreen.ggVisible=false;
				}
				else {
					me.__101button_fullscreen.style.visibility=(Number(me.__101button_fullscreen.style.opacity)>0||!me.__101button_fullscreen.style.opacity)?'inherit':'hidden';
					me.__101button_fullscreen.ggVisible=true;
				}
			}
		}
		me.__101button_fullscreen.logicBlock_visible();
		me.__101button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__101button_fullscreen.onmouseenter=function (e) {
			me.elementMouseOver['_101button_fullscreen']=true;
			me.__101button_fullscreen.logicBlock_scaling();
		}
		me.__101button_fullscreen.onmouseleave=function (e) {
			me.elementMouseOver['_101button_fullscreen']=false;
			me.__101button_fullscreen.logicBlock_scaling();
		}
		me.__101button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_normalscreen';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAHYElEQVRoge2b328U1xXHP/fOjMc1XmNDE4JLCGAXHEiFDfTHS0r60LihlUJ/RMpD21DFsKLpW/+A8taXSonU8tttlUrNQ0klHgqJFbVCVGpIG2NXoY1d7GICJaDietnFeGfnx+nD7K534zX27I5tIPlKK9mzO3PPZ865Z+49d66igkSkGXgBeAroBNZV+t09qDFgEDiplHp1XmeIyG4RmZD7X5dE5IW5YF9ZYiMXQgdmgz2w1JYtoF4ucKo87B7g1/OK+ftX31RKnSwAX+L+SUzVKgWsN/Le3bO0tiyK6oHrGnh2qS1ZRD2lefBDuVSdSkRkqa1YTOmoJ9zv9ycSsIgQBEHxf9d1YzdoLpW26ft+ZAdEAg6CAMMwSL3+HOm3j2FZ1qJCu66LZVlMvt'+
			'NL6ne7MQyjzAHzUeQ+nDrxLZrH34FlGmf7YezN3ygaspAqtOG8fxr73SRMBkys/BItz/0+0nUi92Fz7S5Ypshc8rAH9pP9xx8W3NO5XG4adiBJ5pIHyxTGmu7I1zKj/Nh1XRq/2IOzvJWEkSQz4pJgPw5gb1kYT7uuS11d3TTsiEei3SS79TBNVbQZCbjgSbtjFw7HSLCPzMU8tNbYj++KFboYxkNvlsN2HqF+89eraitySE9DP4OzvZfEZy0yIy72QBJn6I2y8PZ9f8b5nudV/LugQhIqhvFwH/b5vUVYZ9uxqmGhCmAogd7UPQ190cU+vw9n6HTxe8MwGBu+QOZgB5mDHQyePYVpTgeVaZoM/vkUtw5tZuLQFsb+dQGtNblcLgzj4Tex+3tIFzy77Rh2xzM1RVGkkJ4Vml4S0pPv00kcQsNEBC93h8TKSQC8qfSM'+
			'6/h30ixfcRtEGHemCIIgD9uH3b+X9IhHU8GzNcJClR4uqAx6xy9JtOXD+/w+nKE3UEoRBAJO+FF65v0VbYATQE4IJEBrnYcNPdvUFsLW6tmCagKGUuincXb0lkFnL/6Jh9ZsAK3mZUnzqrX4/z5bDrs9PlioIaRLVeZp6SVBT5hkst9nanUS74aP+dDd76133ccc+BXGtcOkr/o05ftsHGFcqliAgyDAsixEBLujG99+jYTzPNkPfVoyh/B9E5hjQCcmK4YP4mSEpkdNsl/4DfXtX0FEsCwL3/cxDKNmW2MB1lozNvweXi5LID7Nq9oxW19iReYXMBVg4M7ZlBm4MAV2QjOxOgktT/DB38+htYFpN7Bu45Y4TI0HGKD5j8/T3JKGnIBWeDc8fN/EINrg3ssaJC4cwvzvUVoCAVuTvtkAG4disTM2YAjC5KQERDAfNg'+
			'jDON/E2jokk5p52lQKHrPy9VMwEUCDSHis8IlJsQGPfe5neHduVXz0AEjmFq1dT884/pmubvoHFaxeXvm8wMdqbWJrTHbGUuLxPK9sBHU3lSafKIkorkz9SU3rQVcswFEm/6UzqEqzqTjauJtiC+nBs6fwpm6h1CxJy0nR2tVN65rHyo5fu3KZa4N9KLu58nniYzYsp/PJXXGYGV+Wbnvvx+GsKDfL/Xu0jv4BReuavWWHrw32saPxp3BlFg/amtRoI9xrwED42BXyAw8f5RsY4k5/11rBi/XN8IELH4bFAE9boD3MR0zww2e6xPggjg14/Kuvc8OZQoKAT6/ZgPrbcZqHfw5TEQ2yfcY3voS/rYfU9ctorTHrPkVLTHbGNnlYt/EJRASlFM7IGexrh8jeFuobNX7WwJhj8uApE7M+wLkdsPL6EbzJJ3l4687iNYMg'+
			'nCvXqliytNYa13VD2OE+7L9+j8xVn/pWk/FNP0SMeWRjQ5jY9CPs1SaZKx7mue8Wiwiu68YCCzEBlxXc+vNz4TYTf+dr+F0vYj4ydzPmKgWf34ez87czKidx1r1rBp4uuPWVFdyc7ccxNnyZ1PXLMJ/HbQA3/zOK3bazQrnodGzQNQFXqi5O16C+FvY/bUCdgnoNwcyyLL4HtgJbobQOiwgzykVJnPfjga4auBx2b8UalFIKs66eiYkmUuONmA0zZ0RWw3Iy48vI3FyGWddQ7LMzCoMDyVg8XdVIq7gi8M/T2IPJklLqUeyO6dWHSpm1dNZTaQZUmEEV2xjuw363h8yoS6LdwumsbQEvMvBssNltR6nvWKClltJk2G7ibD1c9VpW5MW0IuxAkvTowlUXoVI19MUQmv04iqo8HakPW5ZF5txx7P59pEc9mtqNcGFrAW'+
			'BL2wzXsrpxuo6RaDfIjHjY/fvJvH104RfT/KtvwaTQtL62VbwoKkI/viuEXm/AZIB/tS/6xaK8sOi6roiITJz4tqT/ckRERHK5XJWvP0ZXoa30uePyvxPfKbNpvoqctErrV4vxqsNHVdpmlFpaQZ/UtB50acLX5j8uGtSEewQ+LhrTwJmltmIRdVJJuIPlElC5bPjgaEwptV4rpVLAD5bamkXQAchnaaXUSeCVpbRmgXWg4j4mEflJfOOie0YvV7gBZdB7JNzkdL9rQkR2f5Rv1gq3hJs/niXcItAZMYSWSmOEj9kzwKv5/FSm/wMnp+hfnW+saQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_normalscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me.__101button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_fullscreen';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAHuUlEQVRoge2bW2wVxxnHf7Ozuz6Aj20wEIy5GXBCAQHNhYZIkZFaASqRoOrtIQ+Bhz6krSpFean6EOhrHkj6AA+9JaitqqKkcRqKUKpWCKktKSKYexEGDheDuflyjk18dmfn68P6GJ9iytmlxsHhL1mydGa++f93vp359r87ihEgInXAK8BqYAUwb6R2n0PkgDagVSm1s6IeIrJRRLrl0cd5EXnlfmLfHmOSo4Gt9xK7dayZjSLeKulUg2I3Ae9UlPOPLr6hlGotCT7Po7MwpUUP0KQHZ3fT2HJ5KMgAnQ6wYayZPESsdhj/qTwcK5SIyFizeJhwxprAw0ZiwUkSIk3yjHZ8NymZ0iA9XTdwtT9iu0giqrO1uK6LMQbXrWyYUtuwWKS/vw/t6BHbhS'+
			'ZgytTpWGtxHAelVMUaUt3Dwa4WvK4zWBmZkIjgNmToWrmXKY0LE8XuvnKOyZ+sw1zpRzkjJ6BSEWbaEvxv/iUp9eQp3XXzOm5XO6oXdD7EKQhOPkT7gtYWrS2uK5AxdLYlJ3Tl0z2QCXA94niuRfsWlQ9x8lE8Zi94N07SfetG4viJUhrAdT1ENBCAgFKGYOqTHJuxmejqMazjEgUDNDKfxetfHUq7SmCtZclLPyS3J6TDnsP1J4A16BnLWGp2kOm5CAIoi7UeruslpZ9ccAmCRjkWsYIfnuOpLy2mev3msjZRFKH1yGk/EpRSRFHEvK+/VlYc5E/vJ3PpMiKgFEh62um3JSGi+MRy1GSfwnVD9YFv0X94FwBhGAIkEgux4FKfUoz8gXeoOfQyhWsWVT+BcPbzgElLO71gZ6rL0frvEGz8mOxCl8KZkEmnXqf/0O/w'+
			'PA9j0pMKwxDP82Kx594gfyYk2+xR3PhXDlevR9Unu5BlvFP3FLCdx/CfWIRZ9XuyzR6F9pBJp39M38HfDG1JSTGS2Jpmj6jlj1RNm49cOxHfxymR/mYQYHDRcJtexKg/kJXvUjgTkuUn5CNDzfObE+/D9xKrG5+LG2kPotSskwuOrEVsBChM8BkwOCvzXsA4u8iqb1M4E1LDG/RYqHthc0UrdRRFuK5L74F3qS2JXegRtXyAbnx2aOZNUAQd7/WRTa48cUpPmjQJt3ESzHJpnDMfAM/zCMMQd84qzIvvk2326GsPqbuxlZvthyralrTW3Dp7mNrOLfEFa/aIVreWiQVonD0XZnm4MyeSralNSh+SGEPWWhER6e5ol+O7d4iIiDFm6PcgCEREJLxwUOS92SJ750lPZ67i+D2dOZG9c0XenyPh5UNlMYePdfyj7dLV0V'+
			'7GqVIkLi2H35PWWpRSZbVsEAT4vk/+RgdVVT5VNdMqTmmtNbe7O0E5TKybXjazg5MDMDRekvWhhFF5HhaRIVJJKq20/ZLgsQEw3vFY8HjHY8HjHY8Fj3eMiuAoulPUW2tT9Rv+//8TiQUPf8a11t7lDQdBgNaanounuHX5NI7jVCTaWovWmt5rF7h19jBa67uep0WkLFaa5+1EgkUE13Xp6jjHid3b7xIThiG+7zNwci91h9dRf3wdNy+cqqhEdByH/q5OattWU398Az1///VdJkKp3DyxewfdHWdxXTexGZ9IcGyyGab8aw1L9Jvk9mwr86A8z2PgxEdk2r5H4UgARYuvE5jkjgO3LX1HAuoubCH/j1+WidZak9uzjSXOm0w+uI4wKCYy4SFFShfyvZirA3A5ouNiDhgm9vifyBz5PoV2Q3ahy8BTv6Bm1qKKU3pi'+
			'3XTMylaqF8R2UU3up3eJvnLxPHSEmI7b9Pf1JaWfXLCjHJSKu7lVGSA2AD47+gGZoz8g327ILnApPvsrMovWEIZhxSkdhiFu45exqz8ku9Cj0G7KRANoPx5TKSexKwoPukpH8VW/3fYeE47/iHy7oWaBS7DyXaqeXHPX8+z9UHJOnMansS0fxm7oMNEAKkrvhsKDCHZANyyj7+w/mXjytTtiv7ITv/mricWW8D9F/3sfqmHZ4Kc46ZD+zcNNw7Lo5/iXLpC/FlHT7BGu+i1+U0tqsSWURHuNT2NbWsnKxlh078ssZSa2EEF1url6gJTW+N3nkJ6ImoYqgq/9Da+pZYgwxMVDkm1DRIYKjlIMp/EZimv3k23IIPmICflLKJueduoZVkTxyzQHBiYs5dgn+7HXdoDjYYIBZs6eS9P61xML1lqT+/M2Oi7lcP0MRCHOjM'+
			'Usn7gcv+vA4As8C6R7+5BYsDEGR0WAA8oioqm6+inPFY+ASGySa8DxOLF7IkteerXi2HFRsZ0l+mfM0+aO4X5dIbcMolwUJh7bsYQmSEo/eUpPmTqNcPpibK3CZD2irENU7WIChQmd+C8QKPo0PrM2MaGGFWthwMOEw+IVFVG1R1Qdjyk1imj6UqbUT08cP5GJV6pltdZ03bqO5478yYOJDNXVWTy/KtEr01LbKDIU8nn0PfZvY0Im10/7/Ni0JQy3XUejT5r4j23a8Q6H+LP5LwraHOIzAl8U5Bxg31izeIhoVRKfYDkP1I01m1FGTinV5CileoDN923+6GMrDK7SSqlW4O2xZDPK2DriOSYR2ZLodfqjgbdGuABlojdJfMjpUUe3iGz8b333rMskPvyxgfiIwIqEKTRWyBFvs/uAnYPrUxn+AwKGmFHeUg+ZAAAA'+
			'AElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me.__101button_fullscreen.appendChild(me._button_image_fullscreen);
		me.__10barrasuperior.appendChild(me.__101button_fullscreen);
		el=me.__102button_mute=document.createElement('div');
		el.ggId="1.0.2-button_mute";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__102button_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__102button_mute.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_102button_mute'] == true)) && 
				((player.getVariableValue('var_respphone') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__102button_mute.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__102button_mute.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__102button_mute.style.transition='transform 500ms ease 0ms';
				if (me.__102button_mute.ggCurrentLogicStateScaling == 0) {
					me.__102button_mute.ggParameter.sx = 1.1;
					me.__102button_mute.ggParameter.sy = 1.1;
					me.__102button_mute.style.transform=parameterToTransform(me.__102button_mute.ggParameter);
					setTimeout(function() {skin.updateSize(me.__102button_mute);}, 550);
				}
				else {
					me.__102button_mute.ggParameter.sx = 1;
					me.__102button_mute.ggParameter.sy = 1;
					me.__102button_mute.style.transform=parameterToTransform(me.__102button_mute.ggParameter);
					setTimeout(function() {skin.updateSize(me.__102button_mute);}, 550);
				}
			}
		}
		me.__102button_mute.logicBlock_scaling();
		me.__102button_mute.onmouseenter=function (e) {
			me.elementMouseOver['_102button_mute']=true;
			me.__102button_mute.logicBlock_scaling();
		}
		me.__102button_mute.onmouseleave=function (e) {
			me.elementMouseOver['_102button_mute']=false;
			me.__102button_mute.logicBlock_scaling();
		}
		me.__102button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_unmute';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAE4ElEQVRoge2bT0zbVhzHv88JdsbmqBK9lFzgMjppVJUITOIytBbthJapZyA7p7233WFcinprNUGv44/EbiMTp05iyi6bBESqxqTALmSHuDssalVDwE7st4MTk5eYYDuyHdJ8pEh+sf3e75v38+/93nMegQWU0msA5gFMAbgNYMjqug4kD+AVgDQhZNXWHZTSBKX0Db36HFFK5y8T+zxgI71g4SKxC0Fb5iHPajpJVWwSwA+2fP7q8jUhJF0TfISrE5jc8hbAcKjau8lgbfGFCIB/OQBfBW2Jj0xx6H5Xruc2oZTSoK3wEy5oA/ymJ7jb6QnudsJ+NlY+3IQm7QJ8FMKtWRAx5mfzAADfhqXTzCNUDn9mvuufWUFocMKP5k18cWllb6lJLACc/fH00n'+
			'v1Yg7HK5/hZOMu9OJB27Z4LljZW4KafWF5Tv/vAFSRW9+/+wJUkaHLEk5f3geVC23Z46ng8uEmI5YTY4hMPWEvUt+1rCM0OG4e67KE0tb8pT9SKzwTrBdzOMt8a5aJIOKDL793HKj4W3MQxlLn9coS1OySa7vaEmy4WqHpoxVzKL18wFwb+XwR3MAnrtrh4ymEh74wy+r+OjRpx1VdroalirQD5fentoOIEE8hPHzH1rW6XAABmjwhMrWIkx+nTXdWssvodxHhHfewLhdwupV0JJavc8lWlA83cbIxjeONaaj7a8w5IkTR9+mcWdakXVe97FhwoyGtcCIWACrS7nk72eWm4MSPzoIIolku53+1XXcNxy5db0RocBzC2H3L67iBm4xxduBHEqj8nTbbUf9aYwIWEaIIf5xAeX8dAKDlt4HJh47aaCu15D6KMcNGu4QG'+
			'JxC6MQ7ttdHTmrQDNHhI39AdU7AuF0DlgqPI33GTB36UfU4b3ZobuMmUNYfZV8cJ5q6zgugxm1kRIcr0qO4w8+o8wQ3uaZVVEV5seb5l/e7MCpZ6wU7pOMFUaZ1bAwBVOzCXdktjEGoMUgD7XIeuN59vRccJLh+mzWNOjDWN5VrDlJLwUUf1d5RgXS5Ae32eLlqN8XoxZx4TQXScB7SVeFT+2cbxxl3Lc5wYgzCWcrSEo+6vgcqSWRYs0lK1mnQAQOiG88mDY8GN6R8uGBY0WUJJSjpat6p3T350rimDqkg7zKQlPGRvBlaPY8GhwQkIYyko2WVb15/+8gAf3vvJVvonxFPgxBio+o7JuGqcZR6bx5wYQ99Iwr7hVVy5NB9PITySMJZcLdCLOdP1qCKjtDWP/plVW6IvEqHsLTHu7mQWVo/rZ5gTY+BGLhKQAOGjph'+
			'fU1qL67226aqtytN20NuamdwEPozQfT4EfnTXLbhfg9GIOZ789Zr7rn1lxbZenw5Iw+YhZi9KLB1BtPvs1lD/XmR8pMvmwrTcWno/DkalFJluqj7KcGLvU+FDdvUI8hT6LYOYEX1616HIBpa1k0yK63SUgTdoFEUTLNNMpvr1b0uUClOyysSzDRyGMzrbdW27o/cej2+kJ7nZ6grsdDsbf5t8XXnEw9gi8L+Q5AJmgrfCRNKHGDpYjANeCtsZj8oSQYY4Q8hbAN0Fb4wMLQDVKE0LSAJ4HaY3HLFjuY6KUfuf/hhPPeWbxAzCik9TY5HTVeUMpbVoHIq2Ew9gPMQRjO95VIA9jmM0AWK3GJ4b/AVo/8HtMtsLlAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="unmute";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._unmute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._unmute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._unmute.style.transition='';
				if (me._unmute.ggCurrentLogicStateVisible == 0) {
					me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
					me._unmute.ggVisible=true;
				}
				else {
					me._unmute.style.visibility="hidden";
					me._unmute.ggVisible=false;
				}
			}
		}
		me._unmute.logicBlock_visible();
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			player.setVariableValue('var_audio', true);
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me.__102button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_mute';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEIUlEQVRoge2bz0/bZhjHv++b1IasRpXYiVzgFHpgQiLtoZehbhKnqKl6m8TIrs36B6AdxmUVt1Yt9DpYpR2XTJymiSmnVoIgVeJQsgvZgayHolZ1BbVJ/Ozg4MWOU2wHvw5pPifsvPh9Ps7r5/3hvAwuENEVAAsAZgFMAxh3K9eDVAG8AFBkjK17+g8iyhLRG7r47BPRwlmyDyMOMgyWOskuRR1ZiDw49WRN2RyAnz21+YvLbcZY8VR4HxcnMQXlLYCJWPPbzUUbixCGALziAG5FHYlAZjn6vym3Ms2IiKKOQiQ86gBEMxDudwbC/U5cZGUnlQIatW1AGoH8xTyYkhRZPQBAWLd0XFpEvfK77Vwis4bY2HUR1VsIadJaeaVNFgA+PF8WUb2N0IW18g'+
			'r0nSeunxmv90CaGnYINkIVPqkUbLJcSWJo9id7If1dmCG0EVrSMg5f4kPpB+uYyQqG5x7BEPyNOulKmDQV5PINkf4Ox3/cs50b+vI++OhVGLWtbqrsmkDC9doWtGfLMA73PJWX03nEJ74KUtW541vYUA9wvJHzXF5O5yHN5D2XP9nfBAPOvEF6pQAujfi+kb6F9d1fPJf1LVspWM+9lL4LeeZ713Ktffrw3GPEx71L+xZu7UZiY9c6BsVHJ8Fkxde167Vt62+9bGZ35/WdA5jG671whVvhl5OIjV3r5hI25HQejX+3QeoBgHZppyxXkpBSWV91CB1LnwVXkkhk1nC0kWuTNtSDNtlEZs33eLznZktuInr5ybnIAj0oDHxcqBtZoEeFAVMsNppqOx8fv9nVtLJnhY9Li6hX/2o7r+8+hbazEvi6PSnslo2dz3RQ6Z4T'+
			'dpNNZNZcE1kQ6Z4Sdi4UtCaoTtn7pFLwVUdX/XD9n028//Vr18+4koQ8k/e1hEP6/6M4N0G3frr5xtczvoWlVBb1v4tmgJoKdJjfNtQajmo5X+tW8kwepKtgxCCn7360W9KeLSP2+aSvYSUQcBFPL69C21n1VoGs4LM7v1nB12tbttnW5W/+FLp6GahJS+k84qmsueTqgnH4EvruUwBmKzjaWEAisx7JsqyTwM8wV5LgqU4CWTBpxGoFhlozpe/4SzBhEFqWltJ5SFPz1vGptOhVSiehdkvyjUXEx29ax8bhHnSPz35YhN4PD83eBx+dtI5b18GcIygRhC7M5BEMzz12Fbvkc/J+LvGIerdkqAfQdlbRqG6aL9Om5nFp6lsRVdsY/Maj3xkI9zsD4X6Hw/zZ/KfCCw5zj8CnQpUDKEUdhUCKjMwdLPsArkQdTchUGW'+
			'MTnDH2FsB3UUcjgCWgmaUZY0UAD6OMJmSWXPcxEdGP4jechM4Dlxtgk86RucnpovOGiNrmnx0Xdcnc/HEL5haBaZ9NKCqqMLvZEoD1Zn6y8R9eOZh+grKl+gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mute";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_audio') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mute.style.transition='';
				if (me._mute.ggCurrentLogicStateVisible == 0) {
					me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
					me._mute.ggVisible=true;
				}
				else {
					me._mute.style.visibility="hidden";
					me._mute.ggVisible=false;
				}
			}
		}
		me._mute.logicBlock_visible();
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			player.setVariableValue('var_audio', false);
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me.__102button_mute.appendChild(me._mute);
		me.__10barrasuperior.appendChild(me.__102button_mute);
		me.divSkin.appendChild(me.__10barrasuperior);
		el=me.__60localicacao_mobile=document.createElement('div');
		el.ggId="6.0-LOCALICACAO_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me.__60localicacao_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__60localicacao_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_localizacao') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__60localicacao_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60localicacao_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60localicacao_mobile.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__60localicacao_mobile.ggCurrentLogicStatePosition == 0) {
					me.__60localicacao_mobile.style.left = 'calc(50% - (100% / 2))';
					me.__60localicacao_mobile.style.bottom='45px';
				}
				else {
					me.__60localicacao_mobile.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__60localicacao_mobile.style.bottom='25px';
				}
			}
		}
		me.__60localicacao_mobile.logicBlock_position();
		me.__60localicacao_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60localicacao_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60localicacao_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60localicacao_mobile.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__60localicacao_mobile.ggCurrentLogicStateVisible == 0) {
					me.__60localicacao_mobile.style.visibility=(Number(me.__60localicacao_mobile.style.opacity)>0||!me.__60localicacao_mobile.style.opacity)?'inherit':'hidden';
					me.__60localicacao_mobile.ggVisible=true;
				}
				else {
					me.__60localicacao_mobile.style.visibility="hidden";
					me.__60localicacao_mobile.ggVisible=false;
				}
			}
		}
		me.__60localicacao_mobile.logicBlock_visible();
		me.__60localicacao_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_localizacao') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__60localicacao_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__60localicacao_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__60localicacao_mobile.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__60localicacao_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__60localicacao_mobile.style.visibility=me.__60localicacao_mobile.ggVisible?'inherit':'hidden';
					me.__60localicacao_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__60localicacao_mobile.style.opacity == 0.0) { me.__60localicacao_mobile.style.visibility="hidden"; } }, 505);
					me.__60localicacao_mobile.style.opacity=0;
				}
			}
		}
		me.__60localicacao_mobile.logicBlock_alpha();
		me.__60localicacao_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__600_mobile=document.createElement('div');
		els=me.__600_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="6.0.0_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__600_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__600_mobile.ggUpdateText();
		el.appendChild(els);
		me.__600_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__600_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__60localicacao_mobile.appendChild(me.__600_mobile);
		el=me.__601_mobile=document.createElement('div');
		els=me.__601_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__601_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABkCAYAAACSPo4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARCSURBVHgB7dyxchtFHMfx/56sWAyNKkyHS4aZeESXhMZ+AyipUCqGyiYehjaqGAaU6A1IngDzBCFNTKlgAylFB6ZRwUwUW3eb/SvZiRPH0e35/rf/zfw+TSbWXXSrr065PZ+OCAAAAAAAAAAAAAAAAAAAAADeXoYErd7Y2HHPsE1k1y2ZqftzL1tpDWbfjyekWOfb3ro9ybetMX1DtuteprF7oUaz4e93SZBYjEu7G3fcQL44+4iZmJVsS2uQRYh5cY/fQK8+ZonuHA8PrpOQjAR0blzuvz4Es4vB8qBJmTeFYO6d21/s7UJEYrjde3vJEuqCLAvxgl0ytu'+
			'pEYrgN7pVYRk2Q8iGId4/ly1Qks2cQTUsuGT1IUAgKGVs4oT2D9sovGi9IaIgFGzK2MCIxsvxkEPYOaj5IlRA8pqw4GZAQkRiz0aOJzfItrUGqhuAx8dhIiOikr/3NRz1TtO65J+mWX0t2HnKRECc//DkmQaIxmKYgmkMw8RhMQxDtIVgjMVjMICmEYI3FYDGCpBKCNRqDNRkkpRBMatJ3Lh5kRvazoJUqHPZWmtAtzK/HCMEaj8Fmw8NfjaXAU9Hlg1QNYajoHw//EpthL3/+iPhUuzX0U9BKSz6yLhJiNvxD9JdHy7chsjqDpBzi2XYoUEeQ1EMwFTFY1SDv5NnHs1Xqph6CqYnBKgZ5fuRT5hdap9ZSFoKpisGqBQmjMQRrkTLz/aNx++ra3+4V+5QEaA3B1MVgUkE0h2AqY7C6g2gPwdTGYHUFSSEEUx2DXTRI'+
			'KiFYlHNToTpFa4/nFBTK0qSTt3+hRKiP0d3pdR+3qpx9pcUFZ7wu/xuUAHXzjNNOhQia0J1lxm6mvjUdjcUuQKuD2hj1hfD0B1EZo/4Qnu4g6mLIhfD0BlH3H7hsCGZ7j1v5z6SQqhj8bafQENbam8bYmxRm89LuZdGTkVWomfSd/7Wz83GI41uHg/mDo/vtT95zPzGbZdd1n8+91rW19Xz/SM08REWMi4Twf38bgkSPUUcIL/UgUWPUGcJLOUi0GBIhvFSDRIkhGcJLMUjjMZoI4aUWpNEYTYbwUgrSWIwYIbxUgjQSI2YIL4Ug4jE0hPC0BxGNoSmEpzmIWIzV3Y2RC/FlyDrSITytQURi8CWabuu/C1mnqRBe1SDta+9P5vv/PiQBkW5x9MryDYfwZj8eDkJPv1uyfRIS8RZHz5eMFMKrEGSThES9xdHiNnMRQ3'+
			'gcxG1LqQvdyo6tCpEY7rN16bdFpe/3F8ptS79UkNRucVRk+ddvelxbCK9MEMlbHIkcTRUP/vvHHQY+NJauuN3k5av5LI2Obx18RUq5Q9e9latrXbfdV07//NnH0/zzJ7cf/UZCRC/V6ex8uJ5n2aah7ANraGoLM57fPrhPCeBtL7KVxYSVt/3d/P+709FE9RWJAAAAAAAAAAAAAAAAAAAAAGc8BeH8W12fSr99AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="6.0.1_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__601_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__601_mobile.onclick=function (e) {
			player.setVariableValue('vis_localizacao', false);
				me.__600.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__600.ggUpdateText();
			me.__600.ggTextDiv.scrollTop = 0;
		}
		me.__601_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__60localicacao_mobile.appendChild(me.__601_mobile);
		me.divSkin.appendChild(me.__60localicacao_mobile);
		el=me.__20barrainferior=document.createElement('div');
		el.ggId="2.0-BARRAINFERIOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20barrainferior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__20barrainferior.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__20barrainferior.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__20barrainferior.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__20barrainferior.style.transition='opacity 1000ms ease 4500ms';
				if (me.__20barrainferior.ggCurrentLogicStateAlpha == 0) {
					me.__20barrainferior.style.visibility=me.__20barrainferior.ggVisible?'inherit':'hidden';
					me.__20barrainferior.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__20barrainferior.style.opacity == 0.0) { me.__20barrainferior.style.visibility="hidden"; } }, 5505);
					me.__20barrainferior.style.opacity=0;
				}
			}
		}
		me.__20barrainferior.logicBlock_alpha();
		me.__20barrainferior.ggUpdatePosition=function (useTransition) {
		}
		el=me.__200=document.createElement('div');
		el.ggId="2.0.0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ff8717;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__200.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__200.ggUpdatePosition=function (useTransition) {
		}
		me.__20barrainferior.appendChild(me.__200);
		el=me.__201=document.createElement('div');
		el.ggId="2.0.1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__201.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__201.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__201.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__201.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__201.style.transition='';
				if (me.__201.ggCurrentLogicStateVisible == 0) {
					me.__201.style.visibility=(Number(me.__201.style.opacity)>0||!me.__201.style.opacity)?'inherit':'hidden';
					me.__201.ggVisible=true;
				}
				else {
					me.__201.style.visibility="hidden";
					me.__201.ggVisible=false;
				}
			}
		}
		me.__201.logicBlock_visible();
		me.__201.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2010=document.createElement('div');
		el.ggId="2.0.1.0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 106px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2010.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2010.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_2010'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2010.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2010.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2010.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2010.ggCurrentLogicStateScaling == 0) {
					me.__2010.ggParameter.sx = 1.05;
					me.__2010.ggParameter.sy = 1.05;
					me.__2010.style.transform=parameterToTransform(me.__2010.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2010);}, 550);
				}
				else {
					me.__2010.ggParameter.sx = 1;
					me.__2010.ggParameter.sy = 1;
					me.__2010.style.transform=parameterToTransform(me.__2010.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2010);}, 550);
				}
			}
		}
		me.__2010.logicBlock_scaling();
		me.__2010.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2010'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2010.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2010.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2010.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2010.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2010.style.backgroundColor="rgba(7,115,45,1)";
				}
				else {
					me.__2010.style.backgroundColor="rgba(66,140,92,1)";
				}
			}
		}
		me.__2010.logicBlock_backgroundcolor();
		me.__2010.onmouseenter=function (e) {
			me.elementMouseOver['_2010']=true;
			me.__2010.logicBlock_scaling();
			me.__2010.logicBlock_backgroundcolor();
		}
		me.__2010.onmouseleave=function (e) {
			me.elementMouseOver['_2010']=false;
			me.__2010.logicBlock_scaling();
			me.__2010.logicBlock_backgroundcolor();
		}
		me.__2010.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20101=document.createElement('div');
		els=me.__20101__img=document.createElement('img');
		els.className='ggskin ggskin__20101';
		hs=basePath + 'images/_20101.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.1.0.1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20101.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20101.ggUpdatePosition=function (useTransition) {
		}
		me.__2010.appendChild(me.__20101);
		el=me.__20102=document.createElement('div');
		els=me.__20102__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.1.0.2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 43px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__20102.ggUpdateText=function() {
			var params = [];
			var hs = player._("E-MAIL", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20102.ggUpdateText();
		el.appendChild(els);
		me.__20102.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20102.ggUpdatePosition=function (useTransition) {
		}
		me.__2010.appendChild(me.__20102);
		me.__201.appendChild(me.__2010);
		el=me.__2011=document.createElement('div');
		el.ggId="2.0.1.1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : 130px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 142px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2011.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_2011'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2011.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2011.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2011.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2011.ggCurrentLogicStateScaling == 0) {
					me.__2011.ggParameter.sx = 1.05;
					me.__2011.ggParameter.sy = 1.05;
					me.__2011.style.transform=parameterToTransform(me.__2011.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2011);}, 550);
				}
				else {
					me.__2011.ggParameter.sx = 1;
					me.__2011.ggParameter.sy = 1;
					me.__2011.style.transform=parameterToTransform(me.__2011.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2011);}, 550);
				}
			}
		}
		me.__2011.logicBlock_scaling();
		me.__2011.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2011'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2011.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2011.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2011.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2011.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2011.style.backgroundColor="rgba(7,115,45,1)";
				}
				else {
					me.__2011.style.backgroundColor="rgba(66,140,92,1)";
				}
			}
		}
		me.__2011.logicBlock_backgroundcolor();
		me.__2011.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/carpagoias\/","_blank");
		}
		me.__2011.onmouseenter=function (e) {
			me.elementMouseOver['_2011']=true;
			me.__2011.logicBlock_scaling();
			me.__2011.logicBlock_backgroundcolor();
		}
		me.__2011.onmouseleave=function (e) {
			me.elementMouseOver['_2011']=false;
			me.__2011.logicBlock_scaling();
			me.__2011.logicBlock_backgroundcolor();
		}
		me.__2011.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20111=document.createElement('div');
		els=me.__20111__img=document.createElement('img');
		els.className='ggskin ggskin__20111';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYnSURBVHgB7Z2NVdw4EMdn81IAHaAOQirAVHBcBbtXAe8qwFcBuQp2U0FIBXYqCKnAogK2g8kMksHZZ8/ItiRYw++9ebtBH7b+K8vSjOysIAKIeEIfhuyM7NR/PzmwlsN/x2TvrcUefGe758/ValVDBFYwERKNxbokOycr4DipyW7JvpOgFiYwWkASbkMfazhe0YaoyXYk5NcxhYIFJOEK+tiCuzyXjCUrQ4X8oGXg8Y3sC32tYPniMYZsR23e+rFdROyBVIGBtyNcH5bsQhofBwV8F+8JC4KIvQLOEG/vD3gHz1MIe3AyOTA93w08T7XGTqMsKD3xCT/mNR'+
			'hORXZFdgpHAk/BeDbhzz2UJmRMBD94hgp3DkeOFzO0zTdaZZuASh7I1rAwfNsfAtpfSJU0SmFOP4OFgq43qhoMFdZ638OSxWvxImo9cd1XsBpdaKEEdKbqsIBRCmxhAVA7CnQ3jMrbWshbKZqcdTNfBWc+UqgN5UDbGnTz3sP8haLJdTdzJWSs4MjBsZfkc7kqqIxS+dGPfRi2MCh6ymlX5skHlOY1jl9wxKC7PE1A1r5FwXe5CJiPSuV7Wv/dQSbQLZV4vDXgQgN/nAu4H/OOzmkPGeC1L50TH2toCfeJBZTWsMnF8z1kAyNCA1SGz6sm+19b4AeI0DLUVgvuR+3DaGvfZNMXdHe5CudTacMQpV8rdTRC2a1QbsseaSMc20Jk0M05+Q7GVsB8Cq7LN9T0ZaBe+B99DLnoLdkFDGOFtBPVpR8TaiBH8X5CmoDUBpyQ'+
			'vbMGEpHT/wF36VtvJdnnqRE54GEB5cso2hQGhyeyKSghEijPIX9ql3Cskyjp4xrycR1TRIGTj5CYieLZjjEGxrviWUS+dEtICcqz9FkeZwxz0LZUqIQG0N2ANjgu5HAJM0B5TdxwBsn3NVlA39gGdZopjcRwIbl9BiaiCPigrYPnCLhFnW8YEqgZPobxdWhMdogoAmISAVF3BTHRJulU1y7geAVM4KUErJR6v0FkUO+Jk3phdgFR9243OGNMEo4bEs8eHbvWBEyxErlS0ssZM/9BvIfmXyXbBiKTQsBCSLNj99+NgermzZK1kKWAyEQVEJ/9eUOUkJ5bIa3AGXf9PmL3QC349APSo3mRowbIYgv4SUjbpxj7DvHHsEKWqJugYgsoXR7ZQgMgC2ggIjn9gRbyYSETWR2qSySngAbyYSATsQW8F9IM5EO600YNicYW0A'+
			'ppBjNsA/bLxGw3s9gCaic3y7kZSKGkR91pEVVAvx6thSw5BJTCB9F3NaS4idRCGi+lkomI7jk+I2SpIcFBX8KdFXU92jluoxzbwEiyu7P8UqoWshhwDy3G5gaU3pdkKYmRe6Cv8zW69JO0JWVQqUIddsMbmAg6L3RIUGnyjxUiYMqwZsiDKw1O2EJCZS4xPGxqYCIYENZsMIGAnUaG0pCtpcai+1E4+F5hOLP296ASWNe2dhiY4QRlFzu6rR1lQHZDtgN30jxX6z7xaTo2hjJCCMFIicn3xvDePBKEv5YjivE0p4B5lH5fYFJ4GpN8v7FvSAn5yCIeYTUBDUTCN4g3OFpIB7fl78jiiQ6QLD2whRq2A7eddgfxqcHtNr2FjGTrgS28GiDjnlhAnLVpzXVRnWGP5I/HCGmWbyJWyBA1BNiFGst39ws/beHdDMWI49Xw'+
			'/KKce0iLEdIeBXxRL7LvNY9bMtA5GTg02rcb1Xr7letBG4/0o9r2AWOJo3mZRGwCtDnnMdAq9eRwgr5WxCHFD0PLf9x1KiG6tP7AWqiH14IFvDH8za0Qstx2M2vX+pvrhajv8TaHBSqlwPtLJ6QOhe+vPXkEw/yY66HCjVKQ0w0sFJzz4h1fQUgs462/+mmtVXSDYWxxAb0Rxz34rcdWcNrr79Z4ROMjTgsNNNgTz07xAsbWFW/937prbQt5MJ3vp52/tS+0iPYCxtVQiRkiLg0LY18B2vIuov7qT3Frhy/4GdJ4kF87XyDgfQpiD+yCbucTbx0zsGws2ebJ06IQLGALvr8K/g9GC9jix8e/wPkLCzhOam+3JNyknauTBTwE3TYQA/27CLrfc/53GPsDs95YLBsjNPAbFe9oBvOIOwQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.1.1.1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20111.ggUpdatePosition=function (useTransition) {
		}
		me.__2011.appendChild(me.__20111);
		el=me.__20112=document.createElement('div');
		els=me.__20112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.1.1.2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 40px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__20112.ggUpdateText=function() {
			var params = [];
			var hs = player._("INSTAGRAM", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20112.ggUpdateText();
		el.appendChild(els);
		me.__20112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20112.ggUpdatePosition=function (useTransition) {
		}
		me.__2011.appendChild(me.__20112);
		me.__201.appendChild(me.__2011);
		el=me.__2012=document.createElement('div');
		el.ggId="2.0.1.2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : 281px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2012.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2012.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_2012'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2012.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2012.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2012.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2012.ggCurrentLogicStateScaling == 0) {
					me.__2012.ggParameter.sx = 1.05;
					me.__2012.ggParameter.sy = 1.05;
					me.__2012.style.transform=parameterToTransform(me.__2012.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2012);}, 550);
				}
				else {
					me.__2012.ggParameter.sx = 1;
					me.__2012.ggParameter.sy = 1;
					me.__2012.style.transform=parameterToTransform(me.__2012.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2012);}, 550);
				}
			}
		}
		me.__2012.logicBlock_scaling();
		me.__2012.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2012.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2012.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2012.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2012.ggCurrentLogicStateVisible == 0) {
					me.__2012.style.visibility="hidden";
					me.__2012.ggVisible=false;
				}
				else {
					me.__2012.style.visibility=(Number(me.__2012.style.opacity)>0||!me.__2012.style.opacity)?'inherit':'hidden';
					me.__2012.ggVisible=true;
				}
			}
		}
		me.__2012.logicBlock_visible();
		me.__2012.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2012'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2012.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2012.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2012.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2012.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2012.style.backgroundColor="rgba(7,115,45,1)";
				}
				else {
					me.__2012.style.backgroundColor="rgba(66,140,92,1)";
				}
			}
		}
		me.__2012.logicBlock_backgroundcolor();
		me.__2012.onclick=function (e) {
			player.setVariableValue('vis_localizacao', true);
			if (
				(
					((player._(me.ggUserdata.information) == "AUTOPOSTO1"))
				)
			) {
					me.__600.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m14!1m8!1m3!1d36098.288590162396!2d-49.37549207138148!3d-18.0082481908463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a059c8cea4deeb%3A0xc96831279cc858bc!2sCarpa%20Auto%20Posto%201!5e0!3m2!1spt-BR!2sbr!4v1740239654789!5m2!1spt-BR!2sbr\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\" allowfullscreen><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me.__600.ggUpdateText();
				me.__600.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player._(me.ggUserdata.information) == "AGROVET")) || 
					((player._(me.ggUserdata.information) == "VETERINARIA"))
				)
			) {
					me.__600.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m14!1m8!1m3!1d15177.296872479194!2d-49.3582394!3d-18.010151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a0f8026809193d%3A0xbc9437e2bb288113!2sCarpa%20Agrovet!5e0!3m2!1spt-BR!2sbr!4v1740245224164!5m2!1spt-BR!2sbr\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\" allowfullscreen><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me.__600.ggUpdateText();
				me.__600.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player._(me.ggUserdata.information) == "AUTOPOSTO2"))
				)
			) {
					me.__600.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3794.277436562097!2d-49.3753903!3d-18.0123237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a0593769a5005d%3A0x59286313498416ae!2sCarpa%20Auto%20Posto%202!5e0!3m2!1spt-BR!2sbr!4v1740245320808!5m2!1spt-BR!2sbr\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\" allowfullscreen><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me.__600.ggUpdateText();
				me.__600.ggTextDiv.scrollTop = 0;
			}
		}
		me.__2012.onmouseenter=function (e) {
			me.elementMouseOver['_2012']=true;
			me.__2012.logicBlock_scaling();
			me.__2012.logicBlock_backgroundcolor();
		}
		me.__2012.onmouseleave=function (e) {
			me.elementMouseOver['_2012']=false;
			me.__2012.logicBlock_scaling();
			me.__2012.logicBlock_backgroundcolor();
		}
		me.__2012.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20121=document.createElement('div');
		els=me.__20121__img=document.createElement('img');
		els.className='ggskin ggskin__20121';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgB7VqLcdswDIV7GUCZIBohG0SdwNnA2cDuBPYG6gZOJ0gygZoJnA2oThBvgAIm1dAQKEpWos9d3x1OlkiAeCII8WOAjkDEjCQnMfiBA8me5BamDnIyJSkwDq6zgqmBnEpIdtgdZjKEyJENyTv2gxmNENpxUESc88Fj5AmnQghtGO0jztw7oj4Kp59G9L+ekHMwFEb8fMtEXV2ViGerNaHKZl8sXMMbuuSBOs8kPxaLRek5mtHFd/43lX+XikyILluSB2hGCXEcnbw5efV9qt6eBo77O81irEc0Qi16qCuM64B/jeRKpXXEsU5EvpjQpjJ+wA4k+h'+
			'Dx9G/x88DjN7kiu6lo5xd8PY7iviTJIjqpu96DHXNVkuDr6sp7cAINoCOMAGr3T6RKVf5KPcA+7ryy7BvMEzJqbudKREZNMksiSvjPk4iG/0SmhrGIHCP3nTEKETdYf3qPnqEv5Pe+pU6vKYpn547kBi4A6T167eejEukLanfJwr+vYAJAu75hh/iawse0idcdJdjQO19/wClEX3wjY4bWA9bX/03gJUcaMjY4EWy/R6bBoO3BMwyetdwbZeIZXIaU9VFsYAxKxCORiqIqHWck1xT7vJdw7e53oK/pH896ZsjQQn2ZW2Ao7s91t4ruaXU4KBG0A1sihw4I2NgPTeTQVSdgZ6OQSQYhgvqWU6rU453ONdoQDKZarKfs9VBE1rH6aHdWtJ3OXRt7Q2UteQCkTRKfQGyEOGyx/t14kfY/i0iCzZlHlpX+jXM0hTCW/o2c'+
			'qkDXpa4LKc4ST6KI37jB8GlVKRsW9yk0I7rR3YqIG4T8weLYfmgwnIH9UBlBSC6cZKi9QTNK4U9W08d6BrgRSju8/NSqQJuxZP5/l55ieO5lUIQt1j+sey2/r1zl2MyUy3InRUM9LucelS9jI5zTDpkMipNi1FP5MrQb/x4hcKe80dBO+96V50obqWKH0/ASw0ca8ojP+IptwA232an3CZnKWfdcvqADdADqp8srv8ImQuIUHtATgXb2PXQLrSL3TIHnPRBekV1OpuhKBvXJomn0De2gu2hnow2cfdOWDIajZfy/i6AdLxoZHsiJV28XIDHMeX0bNJA5uLLpk6jQQAZnQ6JCSzKceGbxF6oE6zOMCmYWJHygXTAdvF5onf7/Amti1K6DlgGoAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.1.2.1";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20121.ggUpdatePosition=function (useTransition) {
		}
		me.__2012.appendChild(me.__20121);
		el=me.__20122=document.createElement('div');
		els=me.__20122__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2.0.1.2.2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 41px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__20122.ggUpdateText=function() {
			var params = [];
			var hs = player._("LOCALIZA\xc7\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20122.ggUpdateText();
		el.appendChild(els);
		me.__20122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20122.ggUpdatePosition=function (useTransition) {
		}
		me.__2012.appendChild(me.__20122);
		me.__201.appendChild(me.__2012);
		me.__20barrainferior.appendChild(me.__201);
		el=me.__201_mobile=document.createElement('div');
		el.ggId="2.0.1_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__201_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__201_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__201_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__201_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__201_mobile.style.transition='';
				if (me.__201_mobile.ggCurrentLogicStateVisible == 0) {
					me.__201_mobile.style.visibility=(Number(me.__201_mobile.style.opacity)>0||!me.__201_mobile.style.opacity)?'inherit':'hidden';
					me.__201_mobile.ggVisible=true;
				}
				else {
					me.__201_mobile.style.visibility="hidden";
					me.__201_mobile.ggVisible=false;
				}
			}
		}
		me.__201_mobile.logicBlock_visible();
		me.__201_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2010_mobile=document.createElement('div');
		el.ggId="2.0.1.0_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2010_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2010_mobile.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_2010_mobile'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2010_mobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2010_mobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2010_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2010_mobile.ggCurrentLogicStateScaling == 0) {
					me.__2010_mobile.ggParameter.sx = 1.05;
					me.__2010_mobile.ggParameter.sy = 1.05;
					me.__2010_mobile.style.transform=parameterToTransform(me.__2010_mobile.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2010_mobile);}, 550);
				}
				else {
					me.__2010_mobile.ggParameter.sx = 1;
					me.__2010_mobile.ggParameter.sy = 1;
					me.__2010_mobile.style.transform=parameterToTransform(me.__2010_mobile.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2010_mobile);}, 550);
				}
			}
		}
		me.__2010_mobile.logicBlock_scaling();
		me.__2010_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2010_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2010_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2010_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2010_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2010_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2010_mobile.style.backgroundColor="rgba(7,115,45,1)";
				}
				else {
					me.__2010_mobile.style.backgroundColor="rgba(66,140,92,1)";
				}
			}
		}
		me.__2010_mobile.logicBlock_backgroundcolor();
		me.__2010_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_2010_mobile']=true;
			me.__2010_mobile.logicBlock_scaling();
			me.__2010_mobile.logicBlock_backgroundcolor();
		}
		me.__2010_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_2010_mobile']=false;
			me.__2010_mobile.logicBlock_scaling();
			me.__2010_mobile.logicBlock_backgroundcolor();
		}
		me.__2010_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20101_mobile=document.createElement('div');
		els=me.__20101_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__20101_mobile';
		hs=basePath + 'images/_20101_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.1.0.1_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20101_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20101_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__2010_mobile.appendChild(me.__20101_mobile);
		me.__201_mobile.appendChild(me.__2010_mobile);
		el=me.__2011_mobile=document.createElement('div');
		el.ggId="2.0.1.1_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2011_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2011_mobile.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_2011_mobile'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2011_mobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2011_mobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2011_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2011_mobile.ggCurrentLogicStateScaling == 0) {
					me.__2011_mobile.ggParameter.sx = 1.05;
					me.__2011_mobile.ggParameter.sy = 1.05;
					me.__2011_mobile.style.transform=parameterToTransform(me.__2011_mobile.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2011_mobile);}, 550);
				}
				else {
					me.__2011_mobile.ggParameter.sx = 1;
					me.__2011_mobile.ggParameter.sy = 1;
					me.__2011_mobile.style.transform=parameterToTransform(me.__2011_mobile.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2011_mobile);}, 550);
				}
			}
		}
		me.__2011_mobile.logicBlock_scaling();
		me.__2011_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2011_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2011_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2011_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2011_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2011_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2011_mobile.style.backgroundColor="rgba(7,115,45,1)";
				}
				else {
					me.__2011_mobile.style.backgroundColor="rgba(66,140,92,1)";
				}
			}
		}
		me.__2011_mobile.logicBlock_backgroundcolor();
		me.__2011_mobile.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/carpagoias\/","_blank");
		}
		me.__2011_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_2011_mobile']=true;
			me.__2011_mobile.logicBlock_scaling();
			me.__2011_mobile.logicBlock_backgroundcolor();
		}
		me.__2011_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_2011_mobile']=false;
			me.__2011_mobile.logicBlock_scaling();
			me.__2011_mobile.logicBlock_backgroundcolor();
		}
		me.__2011_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20111_mobile=document.createElement('div');
		els=me.__20111_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__20111_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYnSURBVHgB7Z2NVdw4EMdn81IAHaAOQirAVHBcBbtXAe8qwFcBuQp2U0FIBXYqCKnAogK2g8kMksHZZ8/ItiRYw++9ebtBH7b+K8vSjOysIAKIeEIfhuyM7NR/PzmwlsN/x2TvrcUefGe758/ValVDBFYwERKNxbokOycr4DipyW7JvpOgFiYwWkASbkMfazhe0YaoyXYk5NcxhYIFJOEK+tiCuzyXjCUrQ4X8oGXg8Y3sC32tYPniMYZsR23e+rFdROyBVIGBtyNcH5bsQhofBwV8F+8JC4KIvQLOEG/vD3gHz1MIe3AyOTA93w08T7XGTqMsKD3xCT/mNR'+
			'hORXZFdgpHAk/BeDbhzz2UJmRMBD94hgp3DkeOFzO0zTdaZZuASh7I1rAwfNsfAtpfSJU0SmFOP4OFgq43qhoMFdZ638OSxWvxImo9cd1XsBpdaKEEdKbqsIBRCmxhAVA7CnQ3jMrbWshbKZqcdTNfBWc+UqgN5UDbGnTz3sP8haLJdTdzJWSs4MjBsZfkc7kqqIxS+dGPfRi2MCh6ymlX5skHlOY1jl9wxKC7PE1A1r5FwXe5CJiPSuV7Wv/dQSbQLZV4vDXgQgN/nAu4H/OOzmkPGeC1L50TH2toCfeJBZTWsMnF8z1kAyNCA1SGz6sm+19b4AeI0DLUVgvuR+3DaGvfZNMXdHe5CudTacMQpV8rdTRC2a1QbsseaSMc20Jk0M05+Q7GVsB8Cq7LN9T0ZaBe+B99DLnoLdkFDGOFtBPVpR8TaiBH8X5CmoDUBpyQ'+
			'vbMGEpHT/wF36VtvJdnnqRE54GEB5cso2hQGhyeyKSghEijPIX9ql3Cskyjp4xrycR1TRIGTj5CYieLZjjEGxrviWUS+dEtICcqz9FkeZwxz0LZUqIQG0N2ANjgu5HAJM0B5TdxwBsn3NVlA39gGdZopjcRwIbl9BiaiCPigrYPnCLhFnW8YEqgZPobxdWhMdogoAmISAVF3BTHRJulU1y7geAVM4KUErJR6v0FkUO+Jk3phdgFR9243OGNMEo4bEs8eHbvWBEyxErlS0ssZM/9BvIfmXyXbBiKTQsBCSLNj99+NgermzZK1kKWAyEQVEJ/9eUOUkJ5bIa3AGXf9PmL3QC349APSo3mRowbIYgv4SUjbpxj7DvHHsEKWqJugYgsoXR7ZQgMgC2ggIjn9gRbyYSETWR2qSySngAbyYSATsQW8F9IM5EO600YNicYW0A'+
			'ppBjNsA/bLxGw3s9gCaic3y7kZSKGkR91pEVVAvx6thSw5BJTCB9F3NaS4idRCGi+lkomI7jk+I2SpIcFBX8KdFXU92jluoxzbwEiyu7P8UqoWshhwDy3G5gaU3pdkKYmRe6Cv8zW69JO0JWVQqUIddsMbmAg6L3RIUGnyjxUiYMqwZsiDKw1O2EJCZS4xPGxqYCIYENZsMIGAnUaG0pCtpcai+1E4+F5hOLP296ASWNe2dhiY4QRlFzu6rR1lQHZDtgN30jxX6z7xaTo2hjJCCMFIicn3xvDePBKEv5YjivE0p4B5lH5fYFJ4GpN8v7FvSAn5yCIeYTUBDUTCN4g3OFpIB7fl78jiiQ6QLD2whRq2A7eddgfxqcHtNr2FjGTrgS28GiDjnlhAnLVpzXVRnWGP5I/HCGmWbyJWyBA1BNiFGst39ws/beHdDMWI49Xw'+
			'/KKce0iLEdIeBXxRL7LvNY9bMtA5GTg02rcb1Xr7letBG4/0o9r2AWOJo3mZRGwCtDnnMdAq9eRwgr5WxCHFD0PLf9x1KiG6tP7AWqiH14IFvDH8za0Qstx2M2vX+pvrhajv8TaHBSqlwPtLJ6QOhe+vPXkEw/yY66HCjVKQ0w0sFJzz4h1fQUgs462/+mmtVXSDYWxxAb0Rxz34rcdWcNrr79Z4ROMjTgsNNNgTz07xAsbWFW/937prbQt5MJ3vp52/tS+0iPYCxtVQiRkiLg0LY18B2vIuov7qT3Frhy/4GdJ4kF87XyDgfQpiD+yCbucTbx0zsGws2ebJ06IQLGALvr8K/g9GC9jix8e/wPkLCzhOam+3JNyknauTBTwE3TYQA/27CLrfc/53GPsDs95YLBsjNPAbFe9oBvOIOwQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.1.1.1_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20111_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20111_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__2011_mobile.appendChild(me.__20111_mobile);
		me.__201_mobile.appendChild(me.__2011_mobile);
		el=me.__2012_mobile=document.createElement('div');
		el.ggId="2.0.1.2_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : 97px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2012_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2012_mobile.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_2012_mobile'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2012_mobile.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2012_mobile.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2012_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2012_mobile.ggCurrentLogicStateScaling == 0) {
					me.__2012_mobile.ggParameter.sx = 1.05;
					me.__2012_mobile.ggParameter.sy = 1.05;
					me.__2012_mobile.style.transform=parameterToTransform(me.__2012_mobile.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2012_mobile);}, 550);
				}
				else {
					me.__2012_mobile.ggParameter.sx = 1;
					me.__2012_mobile.ggParameter.sy = 1;
					me.__2012_mobile.style.transform=parameterToTransform(me.__2012_mobile.ggParameter);
					setTimeout(function() {skin.updateSize(me.__2012_mobile);}, 550);
				}
			}
		}
		me.__2012_mobile.logicBlock_scaling();
		me.__2012_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2012_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2012_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2012_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2012_mobile.ggCurrentLogicStateVisible == 0) {
					me.__2012_mobile.style.visibility="hidden";
					me.__2012_mobile.ggVisible=false;
				}
				else {
					me.__2012_mobile.style.visibility=(Number(me.__2012_mobile.style.opacity)>0||!me.__2012_mobile.style.opacity)?'inherit':'hidden';
					me.__2012_mobile.ggVisible=true;
				}
			}
		}
		me.__2012_mobile.logicBlock_visible();
		me.__2012_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_2012_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2012_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2012_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2012_mobile.style.transition='transform 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me.__2012_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2012_mobile.style.backgroundColor="rgba(7,115,45,1)";
				}
				else {
					me.__2012_mobile.style.backgroundColor="rgba(66,140,92,1)";
				}
			}
		}
		me.__2012_mobile.logicBlock_backgroundcolor();
		me.__2012_mobile.onclick=function (e) {
			player.setVariableValue('vis_localizacao', true);
			if (
				(
					((player._(me.ggUserdata.information) == "AUTOPOSTO1"))
				)
			) {
					me.__600_mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m14!1m8!1m3!1d36098.288590162396!2d-49.37549207138148!3d-18.0082481908463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a059c8cea4deeb%3A0xc96831279cc858bc!2sCarpa%20Auto%20Posto%201!5e0!3m2!1spt-BR!2sbr!4v1740239654789!5m2!1spt-BR!2sbr\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\" allowfullscreen><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me.__600_mobile.ggUpdateText();
				me.__600_mobile.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player._(me.ggUserdata.information) == "AGROVET")) || 
					((player._(me.ggUserdata.information) == "VETERINARIA"))
				)
			) {
					me.__600_mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m14!1m8!1m3!1d15177.296872479194!2d-49.3582394!3d-18.010151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a0f8026809193d%3A0xbc9437e2bb288113!2sCarpa%20Agrovet!5e0!3m2!1spt-BR!2sbr!4v1740245224164!5m2!1spt-BR!2sbr\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\" allowfullscreen><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me.__600_mobile.ggUpdateText();
				me.__600_mobile.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player._(me.ggUserdata.information) == "AUTOPOSTO2"))
				)
			) {
					me.__600_mobile.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe src=\"https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3794.277436562097!2d-49.3753903!3d-18.0123237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a0593769a5005d%3A0x59286313498416ae!2sCarpa%20Auto%20Posto%202!5e0!3m2!1spt-BR!2sbr!4v1740245320808!5m2!1spt-BR!2sbr\" style=\"border:0px #ffffff none;\" name=\"myiFrame\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0px\" marginwidth=\"0px\" height=\"98%\" width=\"100%\" allowfullscreen><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me.__600_mobile.ggUpdateText();
				me.__600_mobile.ggTextDiv.scrollTop = 0;
			}
		}
		me.__2012_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_2012_mobile']=true;
			me.__2012_mobile.logicBlock_scaling();
			me.__2012_mobile.logicBlock_backgroundcolor();
		}
		me.__2012_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_2012_mobile']=false;
			me.__2012_mobile.logicBlock_scaling();
			me.__2012_mobile.logicBlock_backgroundcolor();
		}
		me.__2012_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20121_mobile=document.createElement('div');
		els=me.__20121_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__20121_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgB7VqLcdswDIV7GUCZIBohG0SdwNnA2cDuBPYG6gZOJ0gygZoJnA2oThBvgAIm1dAQKEpWos9d3x1OlkiAeCII8WOAjkDEjCQnMfiBA8me5BamDnIyJSkwDq6zgqmBnEpIdtgdZjKEyJENyTv2gxmNENpxUESc88Fj5AmnQghtGO0jztw7oj4Kp59G9L+ekHMwFEb8fMtEXV2ViGerNaHKZl8sXMMbuuSBOs8kPxaLRek5mtHFd/43lX+XikyILluSB2hGCXEcnbw5efV9qt6eBo77O81irEc0Qi16qCuM64B/jeRKpXXEsU5EvpjQpjJ+wA4k+h'+
			'Dx9G/x88DjN7kiu6lo5xd8PY7iviTJIjqpu96DHXNVkuDr6sp7cAINoCOMAGr3T6RKVf5KPcA+7ryy7BvMEzJqbudKREZNMksiSvjPk4iG/0SmhrGIHCP3nTEKETdYf3qPnqEv5Pe+pU6vKYpn547kBi4A6T167eejEukLanfJwr+vYAJAu75hh/iawse0idcdJdjQO19/wClEX3wjY4bWA9bX/03gJUcaMjY4EWy/R6bBoO3BMwyetdwbZeIZXIaU9VFsYAxKxCORiqIqHWck1xT7vJdw7e53oK/pH896ZsjQQn2ZW2Ao7s91t4ruaXU4KBG0A1sihw4I2NgPTeTQVSdgZ6OQSQYhgvqWU6rU453ONdoQDKZarKfs9VBE1rH6aHdWtJ3OXRt7Q2UteQCkTRKfQGyEOGyx/t14kfY/i0iCzZlHlpX+jXM0hTCW/o2c'+
			'qkDXpa4LKc4ST6KI37jB8GlVKRsW9yk0I7rR3YqIG4T8weLYfmgwnIH9UBlBSC6cZKi9QTNK4U9W08d6BrgRSju8/NSqQJuxZP5/l55ieO5lUIQt1j+sey2/r1zl2MyUy3InRUM9LucelS9jI5zTDpkMipNi1FP5MrQb/x4hcKe80dBO+96V50obqWKH0/ASw0ca8ojP+IptwA232an3CZnKWfdcvqADdADqp8srv8ImQuIUHtATgXb2PXQLrSL3TIHnPRBekV1OpuhKBvXJomn0De2gu2hnow2cfdOWDIajZfy/i6AdLxoZHsiJV28XIDHMeX0bNJA5uLLpk6jQQAZnQ6JCSzKceGbxF6oE6zOMCmYWJHygXTAdvF5onf7/Amti1K6DlgGoAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.1.2.1_MOBILE";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20121_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20121_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__2012_mobile.appendChild(me.__20121_mobile);
		me.__201_mobile.appendChild(me.__2012_mobile);
		me.__20barrainferior.appendChild(me.__201_mobile);
		el=me.__202=document.createElement('div');
		els=me.__202__img=document.createElement('img');
		els.className='ggskin ggskin__202';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAABACAYAAACDbo5ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKMSURBVHgB7ZqNcdNAEIWfPRQQKkAdxB2gEkwF0AF0YDowVGBTAelApgI7FUgdGCp47HIS0TgzjnZXPjmTfDM7ssf6ed772d07Ac+IGZyQvJHDUuxWrBBbtD8VJ6f+Fmva46G1+9lsdsAlUYFiX8UqxqnFNmIFxqQn8sjLUI0iWm7y5YIiT9m4RcuF35ifWmxhFbrldGhLLocKncKjp6jgxVNCP/F6qJmmyH/MT4QWcljheijENt2X+cmPKzye1KdmKU4s9cP/CNZ6tcZ1cicR70PfsyWul1L7bt+zezzEdysa97diO6TY36do76tTUQk/aSrTLkA/q/6IPU'+
			'f7nIo+1t1NvNPVRzigL+D87C5e0457imNKjKz5xr4bYNa+qn30B5zIyNbr72DjxitWp5IGMRoY6cQOGiA9dohTwEYzpy9/bBCnhJE3SP2vhI17BGAKnwVsHNwFYwQRq2G9gI0SuWGq5azkz1nkoQv6cAWfiFANtTXt5PVq69GaPgrkginv8Jbyn5ELxgrPPOUVY6mgkmdAyYM0q/c2u173HjlgWmrysmeuwUTfZN+xRi6Ymt5DzVzN3hNb086GA2u3MYV66rdpVn0cXp1MqDUxCQ2kOWJYBkcj9h0BomJLw7m7aJEZFVsYzt0iSKiskT54xPDK+G27XuAm6tmhQpuoUMUtlrY43mAEIp7NG32QT2yDV155gYyy1sWUl+oab5cr6Jz66+IvQFjh+S3+ijkXKc7BYXXX0xvGGYRaKtkjc5cwPaG621LTxmQVwpJ2jgji'+
			'Dbe3sKOt8Q4BoiliVrxivbnpH+SGvo3pCkFcnm0Lvx1sbDEVtO0R5Ft4CwqeXmgfpvWuig85gv4BfS1g1BXCv6RhDTMv7gFZAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2.0.2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__202.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__202.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['_202'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__202.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__202.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__202.style.transition='transform 500ms ease 0ms';
				if (me.__202.ggCurrentLogicStateScaling == 0) {
					me.__202.ggParameter.sx = 1.05;
					me.__202.ggParameter.sy = 1.05;
					me.__202.style.transform=parameterToTransform(me.__202.ggParameter);
					setTimeout(function() {skin.updateSize(me.__202);}, 550);
				}
				else {
					me.__202.ggParameter.sx = 1;
					me.__202.ggParameter.sy = 1;
					me.__202.style.transform=parameterToTransform(me.__202.ggParameter);
					setTimeout(function() {skin.updateSize(me.__202);}, 550);
				}
			}
		}
		me.__202.logicBlock_scaling();
		me.__202.onclick=function (e) {
			player.setVariableValue('var_help', true);
		}
		me.__202.onmouseenter=function (e) {
			me.elementMouseOver['_202']=true;
			me.__202.logicBlock_scaling();
		}
		me.__202.onmouseleave=function (e) {
			me.elementMouseOver['_202']=false;
			me.__202.logicBlock_scaling();
		}
		me.__202.ggUpdatePosition=function (useTransition) {
		}
		me.__20barrainferior.appendChild(me.__202);
		me.divSkin.appendChild(me.__20barrainferior);
		el=me.__40menu=document.createElement('div');
		el.ggId="4.0-MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 316px;';
		hs+='left : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__40menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40menu.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__40menu.ggCurrentLogicStatePosition == 0) {
					me.__40menu.style.left='20px';
					me.__40menu.style.top='-320px';
				}
				else {
					me.__40menu.style.left='20px';
					me.__40menu.style.top='160px';
				}
			}
		}
		me.__40menu.logicBlock_position();
		me.__40menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40menu.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__40menu.ggCurrentLogicStateVisible == 0) {
					me.__40menu.style.visibility=(Number(me.__40menu.style.opacity)>0||!me.__40menu.style.opacity)?'inherit':'hidden';
					me.__40menu.ggVisible=true;
				}
				else {
					me.__40menu.style.visibility="hidden";
					me.__40menu.ggVisible=false;
				}
			}
		}
		me.__40menu.logicBlock_visible();
		me.__40menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40menu.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__40menu.ggCurrentLogicStateAlpha == 0) {
					me.__40menu.style.visibility=me.__40menu.ggVisible?'inherit':'hidden';
					me.__40menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__40menu.style.opacity == 0.0) { me.__40menu.style.visibility="hidden"; } }, 6005);
					me.__40menu.style.opacity=0;
				}
			}
		}
		me.__40menu.logicBlock_alpha();
		me.__40menu.ggUpdatePosition=function (useTransition) {
		}
		el=me.__400=document.createElement('div');
		el.ggId="4.0.0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__400.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__400.ggUpdatePosition=function (useTransition) {
		}
		me.__40menu.appendChild(me.__400);
		el=me.__401=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 240;
		el.ggHeight = 42;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__401.ggUpdating == true) return;
			me.__401.ggUpdating = true;
			var el=me.__401;
			var curNumCols = 0;
			curNumCols = me.__401.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__401.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__401.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__401.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__401.getFilteredNodes(tourNodes, filter);
			me.__401.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__401.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__401.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__401.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__401.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__401_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__401.ggNodeCount = me.__401.ggNumFilterPassed;
			me.__401.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__401.parentNode && me.__401.parentNode.classList.contains('ggskin_subelement') && me.__401.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__401.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "MENU";
		el.ggId="4.0.1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 42px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__401.childNodes.length; i++) {
				var child=me.__401.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__401.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__401.ggUpdate();
		}
		me.__40menu.appendChild(me.__401);
		el=me.__402=document.createElement('div');
		els=me.__402__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="4.0.2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_regular";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 4px;';
		hs+='color : #000000;';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__402.ggUpdateText=function() {
			var params = [];
			var hs = player._("Goiatuba-GO 75.600-000\ncontato@carpagoias.com.br", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__402.ggUpdateText();
		el.appendChild(els);
		me.__402.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__402.ggUpdatePosition=function (useTransition) {
		}
		me.__40menu.appendChild(me.__402);
		me.divSkin.appendChild(me.__40menu);
		el=me.__40menu_mobile=document.createElement('div');
		el.ggId="4.0-MENU_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 282px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40menu_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__40menu_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__40menu_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__40menu_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__40menu_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__40menu_mobile.ggCurrentLogicStatePosition == 0) {
					me.__40menu_mobile.style.left='15px';
					me.__40menu_mobile.style.top='-260px';
				}
				else {
					me.__40menu_mobile.style.left='15px';
					me.__40menu_mobile.style.top='120px';
				}
			}
		}
		me.__40menu_mobile.logicBlock_position();
		me.__40menu_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40menu_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40menu_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40menu_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__40menu_mobile.ggCurrentLogicStateVisible == 0) {
					me.__40menu_mobile.style.visibility=(Number(me.__40menu_mobile.style.opacity)>0||!me.__40menu_mobile.style.opacity)?'inherit':'hidden';
					me.__40menu_mobile.ggVisible=true;
				}
				else {
					me.__40menu_mobile.style.visibility="hidden";
					me.__40menu_mobile.ggVisible=false;
				}
			}
		}
		me.__40menu_mobile.logicBlock_visible();
		me.__40menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40menu_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__40menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__40menu_mobile.style.visibility=me.__40menu_mobile.ggVisible?'inherit':'hidden';
					me.__40menu_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__40menu_mobile.style.opacity == 0.0) { me.__40menu_mobile.style.visibility="hidden"; } }, 6005);
					me.__40menu_mobile.style.opacity=0;
				}
			}
		}
		me.__40menu_mobile.logicBlock_alpha();
		me.__40menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__400_mobile=document.createElement('div');
		el.ggId="4.0.0_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__400_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__400_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__40menu_mobile.appendChild(me.__400_mobile);
		el=me.__401_mobile=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 36;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__401_mobile.ggUpdating == true) return;
			me.__401_mobile.ggUpdating = true;
			var el=me.__401_mobile;
			var curNumCols = 0;
			curNumCols = me.__401_mobile.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__401_mobile.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__401_mobile.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__401_mobile.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__401_mobile.getFilteredNodes(tourNodes, filter);
			me.__401_mobile.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__401_mobile.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__401_mobile.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__401_mobile.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me.__401_mobile.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__401_mobile_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__401_mobile.ggNodeCount = me.__401_mobile.ggNumFilterPassed;
			me.__401_mobile.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__401_mobile.parentNode && me.__401_mobile.parentNode.classList.contains('ggskin_subelement') && me.__401_mobile.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__401_mobile.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "MENU";
		el.ggId="4.0.1_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401_mobile.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__401_mobile.childNodes.length; i++) {
				var child=me.__401_mobile.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__401_mobile.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			this.ggWidth = (pw*100)/100.0;
			me.__401_mobile.ggUpdate();
		}
		me.__40menu_mobile.appendChild(me.__401_mobile);
		el=me.__402_mobile=document.createElement('div');
		els=me.__402_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="4.0.2_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_regular";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 6px;';
		hs+='color : #000000;';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__402_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Goiatuba-GO 75.600-000\ncontato@carpagoias.com.br", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__402_mobile.ggUpdateText();
		el.appendChild(els);
		me.__402_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__402_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__40menu_mobile.appendChild(me.__402_mobile);
		me.divSkin.appendChild(me.__40menu_mobile);
		el=me.__30logotipo=document.createElement('div');
		el.ggId="3.0-LOGOTIPO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 160px;';
		hs+='left : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30logotipo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30logotipo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_respphone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30logotipo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30logotipo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30logotipo.style.transition='opacity 1000ms ease 5000ms';
				if (me.__30logotipo.ggCurrentLogicStateVisible == 0) {
					me.__30logotipo.style.visibility=(Number(me.__30logotipo.style.opacity)>0||!me.__30logotipo.style.opacity)?'inherit':'hidden';
					me.__30logotipo.ggVisible=true;
				}
				else {
					me.__30logotipo.style.visibility="hidden";
					me.__30logotipo.ggVisible=false;
				}
			}
		}
		me.__30logotipo.logicBlock_visible();
		me.__30logotipo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30logotipo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30logotipo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30logotipo.style.transition='opacity 1000ms ease 5000ms';
				if (me.__30logotipo.ggCurrentLogicStateAlpha == 0) {
					me.__30logotipo.style.visibility=me.__30logotipo.ggVisible?'inherit':'hidden';
					me.__30logotipo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__30logotipo.style.opacity == 0.0) { me.__30logotipo.style.visibility="hidden"; } }, 6005);
					me.__30logotipo.style.opacity=0;
				}
			}
		}
		me.__30logotipo.logicBlock_alpha();
		me.__30logotipo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__300=document.createElement('div');
		el.ggId="3.0.0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__300.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__300.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3000=document.createElement('div');
		els=me.__3000__img=document.createElement('img');
		els.className='ggskin ggskin__3000';
		hs=basePath + 'images/_3000.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.0.0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 92px;';
		hs+='left : calc(50% - ((186px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((92px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 186px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3000.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3000.ggUpdatePosition=function (useTransition) {
		}
		me.__300.appendChild(me.__3000);
		me.__30logotipo.appendChild(me.__300);
		el=me.__301=document.createElement('div');
		el.ggId="3.0.1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ff8717;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 1px;';
		hs+='bottom : 0px;';
		hs+='height : 2px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__301.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__301.ggUpdatePosition=function (useTransition) {
		}
		me.__30logotipo.appendChild(me.__301);
		me.divSkin.appendChild(me.__30logotipo);
		el=me.__30logotipo_mobile=document.createElement('div');
		el.ggId="3.0-LOGOTIPO_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30logotipo_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__30logotipo_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__30logotipo_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__30logotipo_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__30logotipo_mobile.style.transition='opacity 1000ms ease 5000ms';
				if (me.__30logotipo_mobile.ggCurrentLogicStateVisible == 0) {
					me.__30logotipo_mobile.style.visibility=(Number(me.__30logotipo_mobile.style.opacity)>0||!me.__30logotipo_mobile.style.opacity)?'inherit':'hidden';
					me.__30logotipo_mobile.ggVisible=true;
				}
				else {
					me.__30logotipo_mobile.style.visibility="hidden";
					me.__30logotipo_mobile.ggVisible=false;
				}
			}
		}
		me.__30logotipo_mobile.logicBlock_visible();
		me.__30logotipo_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__30logotipo_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__30logotipo_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__30logotipo_mobile.style.transition='opacity 1000ms ease 5000ms';
				if (me.__30logotipo_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__30logotipo_mobile.style.visibility=me.__30logotipo_mobile.ggVisible?'inherit':'hidden';
					me.__30logotipo_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__30logotipo_mobile.style.opacity == 0.0) { me.__30logotipo_mobile.style.visibility="hidden"; } }, 6005);
					me.__30logotipo_mobile.style.opacity=0;
				}
			}
		}
		me.__30logotipo_mobile.logicBlock_alpha();
		me.__30logotipo_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__300_mobile=document.createElement('div');
		el.ggId="3.0.0_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__300_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__300_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3000_mobile=document.createElement('div');
		els=me.__3000_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__3000_mobile';
		hs=basePath + 'images/_3000_mobile.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3.0.0.0_MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 81px;';
		hs+='left : calc(50% - ((165px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((81px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3000_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3000_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__300_mobile.appendChild(me.__3000_mobile);
		me.__30logotipo_mobile.appendChild(me.__300_mobile);
		el=me.__301_mobile=document.createElement('div');
		el.ggId="3.0.1_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ff8717;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 1px;';
		hs+='bottom : 0px;';
		hs+='height : 2px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__301_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__301_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__30logotipo_mobile.appendChild(me.__301_mobile);
		me.divSkin.appendChild(me.__30logotipo_mobile);
		el=me.__50btabrirfechar=document.createElement('div');
		el.ggId="5.0-BT-ABRIR-FECHAR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 476px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50btabrirfechar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__50btabrirfechar.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__50btabrirfechar.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__50btabrirfechar.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__50btabrirfechar.style.transition='left 750ms ease 0ms, top 750ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__50btabrirfechar.ggCurrentLogicStatePosition == 0) {
					me.__50btabrirfechar.style.left='20px';
					me.__50btabrirfechar.style.top='160px';
				}
				else {
					me.__50btabrirfechar.style.left='20px';
					me.__50btabrirfechar.style.top='476px';
				}
			}
		}
		me.__50btabrirfechar.logicBlock_position();
		me.__50btabrirfechar.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50btabrirfechar.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50btabrirfechar.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50btabrirfechar.style.transition='left 750ms ease 0ms, top 750ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__50btabrirfechar.ggCurrentLogicStateVisible == 0) {
					me.__50btabrirfechar.style.visibility=(Number(me.__50btabrirfechar.style.opacity)>0||!me.__50btabrirfechar.style.opacity)?'inherit':'hidden';
					me.__50btabrirfechar.ggVisible=true;
				}
				else {
					me.__50btabrirfechar.style.visibility="hidden";
					me.__50btabrirfechar.ggVisible=false;
				}
			}
		}
		me.__50btabrirfechar.logicBlock_visible();
		me.__50btabrirfechar.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50btabrirfechar.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50btabrirfechar.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50btabrirfechar.style.transition='left 750ms ease 0ms, top 750ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__50btabrirfechar.ggCurrentLogicStateAlpha == 0) {
					me.__50btabrirfechar.style.visibility=me.__50btabrirfechar.ggVisible?'inherit':'hidden';
					me.__50btabrirfechar.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__50btabrirfechar.style.opacity == 0.0) { me.__50btabrirfechar.style.visibility="hidden"; } }, 6005);
					me.__50btabrirfechar.style.opacity=0;
				}
			}
		}
		me.__50btabrirfechar.logicBlock_alpha();
		me.__50btabrirfechar.onmouseenter=function (e) {
			me.elementMouseOver['_50btabrirfechar']=true;
			me.__500.logicBlock_backgroundcolor();
		}
		me.__50btabrirfechar.onmouseleave=function (e) {
			me.elementMouseOver['_50btabrirfechar']=false;
			me.__500.logicBlock_backgroundcolor();
		}
		me.__50btabrirfechar.ggUpdatePosition=function (useTransition) {
		}
		el=me.__500=document.createElement('div');
		el.ggId="5.0.0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 5px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__500.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__500.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_50btabrirfechar'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__500.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__500.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__500.style.transition='background-color 500ms ease 0ms';
				if (me.__500.ggCurrentLogicStateBackgroundColor == 0) {
					me.__500.style.backgroundColor="rgba(66,140,92,1)";
				}
				else {
					me.__500.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__500.logicBlock_backgroundcolor();
		me.__500.onclick=function (e) {
			player.setVariableValue('var_menu', !player.getVariableValue('var_menu'));
		}
		me.__500.onmouseenter=function (e) {
			me.elementMouseOver['_500']=true;
			me.__5002.logicBlock_textcolor();
			me.__5003.logicBlock_textcolor();
		}
		me.__500.onmouseleave=function (e) {
			me.elementMouseOver['_500']=false;
			me.__5002.logicBlock_textcolor();
			me.__5003.logicBlock_textcolor();
		}
		me.__500.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5001=document.createElement('div');
		els=me.__5001__img=document.createElement('img');
		els.className='ggskin ggskin__5001';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACOCAYAAADXVHYAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAc/SURBVHgB7d1LUlRXHMfxc24jSKoMsIMeopOwAzsrsLKCQJWl5UhdAbiCkEGCyQRYQdyBuILgJDCzXQGgVYoW9Mn9NQ9BGvp1H+fx/Qzohr4w6eLL/5zL7bZmBHvrzdmJw9sLLrMPrDNNZ8yCcXbWWDdrAFStbY1rO2u3jTl+czz5dWtuqb1vRmCHOfjj2nxLETAdu8gvP+Azu2FdZ/POk92tob5rkIP21uabE9au55NAywAISfvYuZ/nnuy2Bzk463fAwZ93nzVM9i8xAILUbFj77sPLu78NcvC1E4L2CbLD6VVrza8GQAz6Tgs9g9DdNPw6/dq5fLMQQE'+
			'xujELPJQMxAKKlJcRr7Qv2evBKEA5e3lslBkDUmllm/9FK4PsHLgXhw9r8Yn4+86kBEDWb/9FvfJlevvL1szsaITRK5HebBkASTvcTts4+P58QGjZTLZoGQDIa1lyaEroTwul08M4ASM7FKaE7IZxOBwASdHFKOF0yuJYBkCjbOjvjkOmCJcPeAZC0iS9T3f9Izoy1PxkASTu7VilzlouWgOS5rKWbzBrbNADSZs1s94JG12H/AEDu061mxisfAZCJW42Zvi+QAiAdmXF2pBdjBBAfLRkIAgAzkdl2HgSzbQAkb/rhznuddiQIQPLclj5mR53OGwMgbfZkMMi6lz2ysQgkzVr3Srfd0442M6sGQJKcMe07j3a7K4VuEI4mJ39nSgDSlE8HK2f3u0GYW9reZ0oA0qPp4MfHu5tnn5//p6KmBD1oACTj4nQg50HQlNBx'+
			'bskASITbuDgdyKVrGXTGwVm7YgBETauB46nD599//crFTTOP/3vhnNk0AKKkGHT0SstL7SsnEq599+eDtbsbvPMzEJfzGFzzZq/2pm8mCkA8+sVAbJ+fQRSACAwSA+kbBCEKQLgGjYEMFAQhCkB4homBDBwEIQpAOIaNgQwVBCEKgP9GiYEMHQQhCoC/Ro2BjBQEIQqAf8aJgYwcBCEKgD/GjYGMFQQhCkD9ioiBjB0EIQpAfYqKgRQSBCEKQPWKjIEUFgQhCkB1io6BFBoEIQpA+cqIgRQeBCEKQHnKioGUEgQhCkDxyoyBlBYEIQpAccqOgZQaBCEKwPiqiIGUHgQhCsDoqoqBVBIEIQrA8KqMgVQWBCEKwOCqjoFUGgQhCkB/dcRAKg+CEAXgenXFQGoJghAF4Ko6YyC1BUGIAvBN3TGQWoMgRAHwIwZSexCEKC'+
			'BlvsRAvAiCEAWkyKcYiDdBEKKAlPgWA/EqCEIUkAIfYyDeBUGIAmLmawzEyyAIUUCMfI6BeBsEIQqIie8xEK+DIEQBMQghBuJ9EIQoIGShxECCCIIQBYQopBhIMEEQooCQhBYDCSoIQhQQghBjIMEFQYgCfBZqDCTIIAhRgI9CjoEEGwQhCvBJ6DGQoIMgRAE+iCEGEnwQhCigTrHEQKIIghAF1CGmGEg0QRCigCrFFgOJKghCFFCFGGMg0QVBiALKFGsMJMogCFFAGWKOgUQbBCEKKFLsMZCogyBEAUVIIQYSfRCEKGAcqcRAkgiCEAWMIqUYSDJBEKKAYaQWA0kqCEIUMIgUYyDJBUGIAm6SagwkySAIUUAvKcdAkg2CEAVclHoMJOkgCFGAEIMTyQdBiELaiME3BOEUUUgTMbiMIFxAFNJCDK4iCN8hCmkgBr0R'+
			'hB6IQtyIwfUIwjWIQpyIwc0Iwg2IQlyIQX8EoQ+iEAdiMBiCMACiEDZiMDiCMCCiECZiMByCMASiEBZiMDyCMCSiEAZiMBqCMAKi4DdiMDqCMCKi4CdiMB6CMAai4BdiMD6CMCai4AdiUAyCUACiUC9iUByCUBCiUA9iUCyCUCCiUC1iUDyCUDCiUA1iUA6CUAKiUC5iUB6CUBKiUA5iUC6CUCKiUCxiUD6CUDKiUAxiUA2CUAGiMB5iUB2CUBGiMBpiUC2CUCGiMBxiUD2CUDGiMBhiUA+CUAOicDNiUB+CUBOi0BsxqBdBqBFRuIwY1I8g1IwonCAGfiAIHkg9CsTAHwTBE6lGgRj4hSB4JLUoEAP/EATPpBIFYuAnguCh2KNADPxFEDwVaxSIgd8yAy/NPNlZdNaumIgQA/8xIXju4K97y9a5FRM8t3U8dfjL3F'+
			'J738BbBCEAe2vzrcza9fzJapoAOWtWZx7vPDfwHkuGAOQj9pZG7fxXa8MEREsEm7kWMQgHE0Jg8mlhMZ8Wln2fFjQVdCY/v2CJEBaCEKA8Cs1GZp/mf4KfGe+4LZuZlTuPdt8YBIcgBKwbBmuW86dx0dSOEMSAIERAYciXEQ/yu8+qXEo4Z/etPc5DYFcJQRwIQmQ+/j1/33XMojO2VUYcTiLQ2c5//qvO1OdN9gjiQhAitvfHvYWs4e7nT3Ir3+RrWmcWzJDOAmCs27bWvjq6dfiWCMSLICRkb705az790Jy41ZlxLg9EjwlCpwp1e3yUvb095famH+68N0jG/zoPCiQEJe4ZAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.0.1";
		el.ggDx=-34;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : calc(50% - ((21px + 0px) / 2) - 34px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__5001.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5001.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__5001.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5001.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5001.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 500ms ease 700ms';
				if (me.__5001.ggCurrentLogicStatePosition == 0) {
					me.__5001.style.left = 'calc(50% - (21px / 2) - (0px / 2) + -80px)';
					me.__5001.style.top = 'calc(50% - (10px / 2))';
				}
				else {
					me.__5001.style.left='calc(50% - ((21px + 0px) / 2) - 34px)';
					me.__5001.style.top='calc(50% - ((10px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__5001.logicBlock_position();
		me.__5001.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__5001.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__5001.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__5001.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 500ms ease 700ms';
				if (me.__5001.ggCurrentLogicStateAngle == 0) {
					me.__5001.ggParameter.a = 0;
					me.__5001.style.transform=parameterToTransform(me.__5001.ggParameter);
				}
				else {
					me.__5001.ggParameter.a = 180;
					me.__5001.style.transform=parameterToTransform(me.__5001.ggParameter);
				}
			}
		}
		me.__5001.logicBlock_angle();
		me.__5001.ggUpdatePosition=function (useTransition) {
		}
		me.__500.appendChild(me.__5001);
		el=me.__5002=document.createElement('div');
		els=me.__5002__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.0.2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5002.ggUpdateText=function() {
			var params = [];
			var hs = player._("Recolher", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5002.ggUpdateText();
		el.appendChild(els);
		me.__5002.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5002.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__5002.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__5002.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__5002.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5002.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__5002.style.opacity == 0.0) { me.__5002.style.visibility="hidden"; } }, 1005);
					me.__5002.style.opacity=0;
				}
				else {
					me.__5002.style.visibility=me.__5002.ggVisible?'inherit':'hidden';
					me.__5002.style.opacity=1;
				}
			}
		}
		me.__5002.logicBlock_alpha();
		me.__5002.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['_500'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__5002.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__5002.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__5002.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5002.ggCurrentLogicStateTextColor == 0) {
					me.__5002.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__5002.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__5002.logicBlock_textcolor();
		me.__5002.ggUpdatePosition=function (useTransition) {
		}
		me.__500.appendChild(me.__5002);
		el=me.__5003=document.createElement('div');
		els=me.__5003__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.0.3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5003.ggUpdateText=function() {
			var params = [];
			var hs = player._("Conhe\xe7a Nosso Grupo", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5003.ggUpdateText();
		el.appendChild(els);
		me.__5003.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5003.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__5003.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__5003.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__5003.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5003.ggCurrentLogicStateAlpha == 0) {
					me.__5003.style.visibility=me.__5003.ggVisible?'inherit':'hidden';
					me.__5003.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__5003.style.opacity == 0.0) { me.__5003.style.visibility="hidden"; } }, 1005);
					me.__5003.style.opacity=0;
				}
			}
		}
		me.__5003.logicBlock_alpha();
		me.__5003.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['_500'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__5003.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__5003.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__5003.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5003.ggCurrentLogicStateTextColor == 0) {
					me.__5003.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__5003.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__5003.logicBlock_textcolor();
		me.__5003.ggUpdatePosition=function (useTransition) {
		}
		me.__500.appendChild(me.__5003);
		me.__50btabrirfechar.appendChild(me.__500);
		me.divSkin.appendChild(me.__50btabrirfechar);
		el=me.__50btabrirfechar_mobile=document.createElement('div');
		el.ggId="5.0-BT-ABRIR-FECHAR_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 402px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50btabrirfechar_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__50btabrirfechar_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__50btabrirfechar_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__50btabrirfechar_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__50btabrirfechar_mobile.style.transition='left 750ms ease 0ms, top 750ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__50btabrirfechar_mobile.ggCurrentLogicStatePosition == 0) {
					me.__50btabrirfechar_mobile.style.left='15px';
					me.__50btabrirfechar_mobile.style.top='120px';
				}
				else {
					me.__50btabrirfechar_mobile.style.left='15px';
					me.__50btabrirfechar_mobile.style.top='402px';
				}
			}
		}
		me.__50btabrirfechar_mobile.logicBlock_position();
		me.__50btabrirfechar_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__50btabrirfechar_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__50btabrirfechar_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__50btabrirfechar_mobile.style.transition='left 750ms ease 0ms, top 750ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__50btabrirfechar_mobile.ggCurrentLogicStateVisible == 0) {
					me.__50btabrirfechar_mobile.style.visibility=(Number(me.__50btabrirfechar_mobile.style.opacity)>0||!me.__50btabrirfechar_mobile.style.opacity)?'inherit':'hidden';
					me.__50btabrirfechar_mobile.ggVisible=true;
				}
				else {
					me.__50btabrirfechar_mobile.style.visibility="hidden";
					me.__50btabrirfechar_mobile.ggVisible=false;
				}
			}
		}
		me.__50btabrirfechar_mobile.logicBlock_visible();
		me.__50btabrirfechar_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__50btabrirfechar_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__50btabrirfechar_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__50btabrirfechar_mobile.style.transition='left 750ms ease 0ms, top 750ms ease 0ms, opacity 1000ms ease 5000ms';
				if (me.__50btabrirfechar_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__50btabrirfechar_mobile.style.visibility=me.__50btabrirfechar_mobile.ggVisible?'inherit':'hidden';
					me.__50btabrirfechar_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__50btabrirfechar_mobile.style.opacity == 0.0) { me.__50btabrirfechar_mobile.style.visibility="hidden"; } }, 6005);
					me.__50btabrirfechar_mobile.style.opacity=0;
				}
			}
		}
		me.__50btabrirfechar_mobile.logicBlock_alpha();
		me.__50btabrirfechar_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_50btabrirfechar_mobile']=true;
			me.__500_mobile.logicBlock_backgroundcolor();
		}
		me.__50btabrirfechar_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_50btabrirfechar_mobile']=false;
			me.__500_mobile.logicBlock_backgroundcolor();
		}
		me.__50btabrirfechar_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__500_mobile=document.createElement('div');
		el.ggId="5.0.0_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 5px 5px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__500_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__500_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_50btabrirfechar_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__500_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__500_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__500_mobile.style.transition='background-color 500ms ease 0ms';
				if (me.__500_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__500_mobile.style.backgroundColor="rgba(66,140,92,1)";
				}
				else {
					me.__500_mobile.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__500_mobile.logicBlock_backgroundcolor();
		me.__500_mobile.onclick=function (e) {
			player.setVariableValue('var_menu', !player.getVariableValue('var_menu'));
		}
		me.__500_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_500_mobile']=true;
			me.__5002_mobile.logicBlock_textcolor();
			me.__5003_mobile.logicBlock_textcolor();
		}
		me.__500_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_500_mobile']=false;
			me.__5002_mobile.logicBlock_textcolor();
			me.__5003_mobile.logicBlock_textcolor();
		}
		me.__500_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5001_mobile=document.createElement('div');
		els=me.__5001_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__5001_mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACOCAYAAADXVHYAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAc/SURBVHgB7d1LUlRXHMfxc24jSKoMsIMeopOwAzsrsLKCQJWl5UhdAbiCkEGCyQRYQdyBuILgJDCzXQGgVYoW9Mn9NQ9BGvp1H+fx/Qzohr4w6eLL/5zL7bZmBHvrzdmJw9sLLrMPrDNNZ8yCcXbWWDdrAFStbY1rO2u3jTl+czz5dWtuqb1vRmCHOfjj2nxLETAdu8gvP+Azu2FdZ/POk92tob5rkIP21uabE9au55NAywAISfvYuZ/nnuy2Bzk463fAwZ93nzVM9i8xAILUbFj77sPLu78NcvC1E4L2CbLD6VVrza8GQAz6Tgs9g9DdNPw6/dq5fLMQQE'+
			'xujELPJQMxAKKlJcRr7Qv2evBKEA5e3lslBkDUmllm/9FK4PsHLgXhw9r8Yn4+86kBEDWb/9FvfJlevvL1szsaITRK5HebBkASTvcTts4+P58QGjZTLZoGQDIa1lyaEroTwul08M4ASM7FKaE7IZxOBwASdHFKOF0yuJYBkCjbOjvjkOmCJcPeAZC0iS9T3f9Izoy1PxkASTu7VilzlouWgOS5rKWbzBrbNADSZs1s94JG12H/AEDu061mxisfAZCJW42Zvi+QAiAdmXF2pBdjBBAfLRkIAgAzkdl2HgSzbQAkb/rhznuddiQIQPLclj5mR53OGwMgbfZkMMi6lz2ysQgkzVr3Srfd0442M6sGQJKcMe07j3a7K4VuEI4mJ39nSgDSlE8HK2f3u0GYW9reZ0oA0qPp4MfHu5tnn5//p6KmBD1oACTj4nQg50HQlNBx'+
			'bskASITbuDgdyKVrGXTGwVm7YgBETauB46nD599//crFTTOP/3vhnNk0AKKkGHT0SstL7SsnEq599+eDtbsbvPMzEJfzGFzzZq/2pm8mCkA8+sVAbJ+fQRSACAwSA+kbBCEKQLgGjYEMFAQhCkB4homBDBwEIQpAOIaNgQwVBCEKgP9GiYEMHQQhCoC/Ro2BjBQEIQqAf8aJgYwcBCEKgD/GjYGMFQQhCkD9ioiBjB0EIQpAfYqKgRQSBCEKQPWKjIEUFgQhCkB1io6BFBoEIQpA+cqIgRQeBCEKQHnKioGUEgQhCkDxyoyBlBYEIQpAccqOgZQaBCEKwPiqiIGUHgQhCsDoqoqBVBIEIQrA8KqMgVQWBCEKwOCqjoFUGgQhCkB/dcRAKg+CEAXgenXFQGoJghAF4Ko6YyC1BUGIAvBN3TGQWoMgRAHwIwZSexCEKC'+
			'BlvsRAvAiCEAWkyKcYiDdBEKKAlPgWA/EqCEIUkAIfYyDeBUGIAmLmawzEyyAIUUCMfI6BeBsEIQqIie8xEK+DIEQBMQghBuJ9EIQoIGShxECCCIIQBYQopBhIMEEQooCQhBYDCSoIQhQQghBjIMEFQYgCfBZqDCTIIAhRgI9CjoEEGwQhCvBJ6DGQoIMgRAE+iCEGEnwQhCigTrHEQKIIghAF1CGmGEg0QRCigCrFFgOJKghCFFCFGGMg0QVBiALKFGsMJMogCFFAGWKOgUQbBCEKKFLsMZCogyBEAUVIIQYSfRCEKGAcqcRAkgiCEAWMIqUYSDJBEKKAYaQWA0kqCEIUMIgUYyDJBUGIAm6SagwkySAIUUAvKcdAkg2CEAVclHoMJOkgCFGAEIMTyQdBiELaiME3BOEUUUgTMbiMIFxAFNJCDK4iCN8hCmkgBr0R'+
			'hB6IQtyIwfUIwjWIQpyIwc0Iwg2IQlyIQX8EoQ+iEAdiMBiCMACiEDZiMDiCMCCiECZiMByCMASiEBZiMDyCMCSiEAZiMBqCMAKi4DdiMDqCMCKi4CdiMB6CMAai4BdiMD6CMCai4AdiUAyCUACiUC9iUByCUBCiUA9iUCyCUCCiUC1iUDyCUDCiUA1iUA6CUAKiUC5iUB6CUBKiUA5iUC6CUCKiUCxiUD6CUDKiUAxiUA2CUAGiMB5iUB2CUBGiMBpiUC2CUCGiMBxiUD2CUDGiMBhiUA+CUAOicDNiUB+CUBOi0BsxqBdBqBFRuIwY1I8g1IwonCAGfiAIHkg9CsTAHwTBE6lGgRj4hSB4JLUoEAP/EATPpBIFYuAnguCh2KNADPxFEDwVaxSIgd8yAy/NPNlZdNaumIgQA/8xIXju4K97y9a5FRM8t3U8dfjL3F'+
			'J738BbBCEAe2vzrcza9fzJapoAOWtWZx7vPDfwHkuGAOQj9pZG7fxXa8MEREsEm7kWMQgHE0Jg8mlhMZ8Wln2fFjQVdCY/v2CJEBaCEKA8Cs1GZp/mf4KfGe+4LZuZlTuPdt8YBIcgBKwbBmuW86dx0dSOEMSAIERAYciXEQ/yu8+qXEo4Z/etPc5DYFcJQRwIQmQ+/j1/33XMojO2VUYcTiLQ2c5//qvO1OdN9gjiQhAitvfHvYWs4e7nT3Ir3+RrWmcWzJDOAmCs27bWvjq6dfiWCMSLICRkb705az790Jy41ZlxLg9EjwlCpwp1e3yUvb095famH+68N0jG/zoPCiQEJe4ZAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="5.0.0.1_MOBILE";
		el.ggDx=-38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 10px;';
		hs+='left : calc(50% - ((21px + 0px) / 2) - 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__5001_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5001_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__5001_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__5001_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__5001_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 500ms ease 700ms';
				if (me.__5001_mobile.ggCurrentLogicStatePosition == 0) {
					me.__5001_mobile.style.left = 'calc(50% - (21px / 2) - (0px / 2) + -74px)';
					me.__5001_mobile.style.top = 'calc(50% - (10px / 2))';
				}
				else {
					me.__5001_mobile.style.left='calc(50% - ((21px + 0px) / 2) - 38px)';
					me.__5001_mobile.style.top='calc(50% - ((10px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__5001_mobile.logicBlock_position();
		me.__5001_mobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__5001_mobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__5001_mobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__5001_mobile.style.transition='left 1000ms ease 0ms, top 1000ms ease 0ms, transform 500ms ease 700ms';
				if (me.__5001_mobile.ggCurrentLogicStateAngle == 0) {
					me.__5001_mobile.ggParameter.a = 0;
					me.__5001_mobile.style.transform=parameterToTransform(me.__5001_mobile.ggParameter);
				}
				else {
					me.__5001_mobile.ggParameter.a = 180;
					me.__5001_mobile.style.transform=parameterToTransform(me.__5001_mobile.ggParameter);
				}
			}
		}
		me.__5001_mobile.logicBlock_angle();
		me.__5001_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__500_mobile.appendChild(me.__5001_mobile);
		el=me.__5002_mobile=document.createElement('div');
		els=me.__5002_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.0.2_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5002_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Recolher", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5002_mobile.ggUpdateText();
		el.appendChild(els);
		me.__5002_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5002_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__5002_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__5002_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__5002_mobile.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5002_mobile.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__5002_mobile.style.opacity == 0.0) { me.__5002_mobile.style.visibility="hidden"; } }, 1005);
					me.__5002_mobile.style.opacity=0;
				}
				else {
					me.__5002_mobile.style.visibility=me.__5002_mobile.ggVisible?'inherit':'hidden';
					me.__5002_mobile.style.opacity=1;
				}
			}
		}
		me.__5002_mobile.logicBlock_alpha();
		me.__5002_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['_500_mobile'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__5002_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__5002_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__5002_mobile.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5002_mobile.ggCurrentLogicStateTextColor == 0) {
					me.__5002_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__5002_mobile.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__5002_mobile.logicBlock_textcolor();
		me.__5002_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__500_mobile.appendChild(me.__5002_mobile);
		el=me.__5003_mobile=document.createElement('div');
		els=me.__5003_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5.0.0.3_MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5003_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("Conhe\xe7a Nosso Grupo", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5003_mobile.ggUpdateText();
		el.appendChild(els);
		me.__5003_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5003_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__5003_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__5003_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__5003_mobile.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5003_mobile.ggCurrentLogicStateAlpha == 0) {
					me.__5003_mobile.style.visibility=me.__5003_mobile.ggVisible?'inherit':'hidden';
					me.__5003_mobile.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__5003_mobile.style.opacity == 0.0) { me.__5003_mobile.style.visibility="hidden"; } }, 1005);
					me.__5003_mobile.style.opacity=0;
				}
			}
		}
		me.__5003_mobile.logicBlock_alpha();
		me.__5003_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['_500_mobile'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__5003_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__5003_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__5003_mobile.style.transition='opacity 1000ms ease 0ms, color 500ms ease 0ms';
				if (me.__5003_mobile.ggCurrentLogicStateTextColor == 0) {
					me.__5003_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__5003_mobile.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me.__5003_mobile.logicBlock_textcolor();
		me.__5003_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__500_mobile.appendChild(me.__5003_mobile);
		me.__50btabrirfechar_mobile.appendChild(me.__500_mobile);
		me.divSkin.appendChild(me.__50btabrirfechar_mobile);
		el=me._fonts=document.createElement('div');
		el.ggId="Fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._fonts);
		el=me.__60localicacao=document.createElement('div');
		el.ggId="6.0-LOCALICACAO";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 82%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me.__60localicacao.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__60localicacao.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_localizacao') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__60localicacao.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60localicacao.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60localicacao.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__60localicacao.ggCurrentLogicStatePosition == 0) {
					me.__60localicacao.style.right='0px';
					me.__60localicacao.style.top = 'calc(50% - (82% / 2))';
				}
				else {
					me.__60localicacao.style.right='-20px';
					me.__60localicacao.style.top='calc(50% - ((82% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__60localicacao.logicBlock_position();
		me.__60localicacao.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60localicacao.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60localicacao.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60localicacao.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__60localicacao.ggCurrentLogicStateVisible == 0) {
					me.__60localicacao.style.visibility=(Number(me.__60localicacao.style.opacity)>0||!me.__60localicacao.style.opacity)?'inherit':'hidden';
					me.__60localicacao.ggVisible=true;
				}
				else {
					me.__60localicacao.style.visibility="hidden";
					me.__60localicacao.ggVisible=false;
				}
			}
		}
		me.__60localicacao.logicBlock_visible();
		me.__60localicacao.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_localizacao') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__60localicacao.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__60localicacao.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__60localicacao.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__60localicacao.ggCurrentLogicStateAlpha == 0) {
					me.__60localicacao.style.visibility=me.__60localicacao.ggVisible?'inherit':'hidden';
					me.__60localicacao.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__60localicacao.style.opacity == 0.0) { me.__60localicacao.style.visibility="hidden"; } }, 505);
					me.__60localicacao.style.opacity=0;
				}
			}
		}
		me.__60localicacao.logicBlock_alpha();
		me.__60localicacao.ggUpdatePosition=function (useTransition) {
		}
		el=me.__600=document.createElement('div');
		els=me.__600__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="6.0.0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__600.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__600.ggUpdateText();
		el.appendChild(els);
		me.__600.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__600.ggUpdatePosition=function (useTransition) {
		}
		me.__60localicacao.appendChild(me.__600);
		el=me.__601=document.createElement('div');
		els=me.__601__img=document.createElement('img');
		els.className='ggskin ggskin__601';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABkCAYAAACSPo4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQRSURBVHgB7dxfThNRFMfxc1uKLwp0BfbRGCG4A1gCK7CsAExAH4VHBZLuQFiBugJ1B42g8bE74M8b1pnrPaUdkT/t3Omcueea3ychAdpOO/l2pr3T6SUCAAAAAAAAAAAAAAAAAAAAgP+XIUHnr5Y2jTEbZG3L/XlGxnxMyOw233Z7pNjp6+VW3aYb7te2+1kwZLqGbOfhu29HJEgshgtx6Bb+4o6LeomprWoNMgzx2f3aunWhtYdze8frJKRGAi62F9v3hGCDleWVJmXGhmDGtM+3ljZJiEiMwa5pPHVBJoYYMjWatG6FicSwRMs5rqYmSN4QQ3muU4hIDO'+
			'IX63yCB/EMwc+0vOvmTSaGe9fkce1gQbxDDFifdfMiEiO5vNwl8noGVR6kSAi3+z1L+v1dEiISo9n52Uvs71VSGqRoiNStE68bCREd9J1uP12umxle6QWPm4mOQ6YKsfejS4JEYzBNQTSHYOIxmIYg2kOwSmKwkEFiCMEqi8FCBIklBKs0BqsySEwhmNQI/F68kkmSrpEf77e9xQZ0RGli10OEYJXHYM2Dky+Jtb6HonMHKRqCkqTdPDgWG2FPUvlu6rpTd6i9bsx78jN2lzVNiLmD76IfHk0SNAYrM0jMIVjwGKyMILGHYCpisMJBftWe0wNaiD0EUxODFQliLXX5XYg1uT7Q+ktZCKYqBiu4hfhRGIKpi8FEgygNwVTGYCJBFIdgamOwUoMoD8FUx2ClBIkgBFMfg00VJJIQLMixKW/9Oh8v6pEny+OQpPGJIqE+'+
			'xunm8sJMo8CAjgabfavmbsvLoAjofgEfhvAe0N3AA8O07w6ddLpiJ6CVQe9b25JCjMQQROegr+QQI9qD6DscIhRiRHMQdS/gkiGYccuuN5IPpJCqGPxtJ98QNk13+MfnNq7IysX2ouzByALU7KbGfO3sXhxhfv9kcCLy+dazN6ZW2/G5vfTXwnypiDFtiGw5kQcJHqOsENnyIg4SNEbZIbLlRhokWAypENnyIwwSJIZ0iOx+IgtSeYyqQmT3F1GQSmNUHSK730iCVBYjVIjs/iMIUkmM0CGyx6E8iHgMLSGyx6M4iPQUR6pCjGgNInag8Hx7qaMxBOP7KHBwsS19cFFky+Apjsj3nNmKQlxXZAtxz9621CRgoaY4+keIEKzIFpJa2yYhIac4urpuoBAj3kHcZyEkJOgUR9a9KIYMMXIVxObb9UQ3xZG13clXcSEUfb'+
			'Azv3/czhcktimOKHk57nJtIUbyBIlviiP+rjfZNXvHKZmWbEdjiBEO4h5l5+b/B3NNJXYt3imONp+0qNFYmTHmcWrorJba7qO9468UAX7sM7Ozg3ESP/b08uKo2empPiMRAAAAAAAAAAAAAAAAAAAA4JY/g4Alf8S1+dsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABkCAYAAACSPo4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARCSURBVHgB7dyxchtFHMfx/56sWAyNKkyHS4aZeESXhMZ+AyipUCqGyiYehjaqGAaU6A1IngDzBCFNTKlgAylFB6ZRwUwUW3eb/SvZiRPH0e35/rf/zfw+TSbWXXSrr065PZ+OCAAAAAAAAAAAAAAAAAAAAADeXoYErd7Y2HHPsE1k1y2ZqftzL1tpDWbfjyekWOfb3ro9ybetMX1DtuteprF7oUaz4e93SZBYjEu7G3fcQL44+4iZmJVsS2uQRYh5cY/fQK8+ZonuHA8PrpOQjAR0blzuvz4Es4vB8qBJmTeFYO6d21/s7UJEYrjde3vJEuqCLAvxgl0ytu'+
			'pEYrgN7pVYRk2Q8iGId4/ly1Qks2cQTUsuGT1IUAgKGVs4oT2D9sovGi9IaIgFGzK2MCIxsvxkEPYOaj5IlRA8pqw4GZAQkRiz0aOJzfItrUGqhuAx8dhIiOikr/3NRz1TtO65J+mWX0t2HnKRECc//DkmQaIxmKYgmkMw8RhMQxDtIVgjMVjMICmEYI3FYDGCpBKCNRqDNRkkpRBMatJ3Lh5kRvazoJUqHPZWmtAtzK/HCMEaj8Fmw8NfjaXAU9Hlg1QNYajoHw//EpthL3/+iPhUuzX0U9BKSz6yLhJiNvxD9JdHy7chsjqDpBzi2XYoUEeQ1EMwFTFY1SDv5NnHs1Xqph6CqYnBKgZ5fuRT5hdap9ZSFoKpisGqBQmjMQRrkTLz/aNx++ra3+4V+5QEaA3B1MVgUkE0h2AqY7C6g2gPwdTGYHUFSSEEUx2DXTRI'+
			'KiFYlHNToTpFa4/nFBTK0qSTt3+hRKiP0d3pdR+3qpx9pcUFZ7wu/xuUAHXzjNNOhQia0J1lxm6mvjUdjcUuQKuD2hj1hfD0B1EZo/4Qnu4g6mLIhfD0BlH3H7hsCGZ7j1v5z6SQqhj8bafQENbam8bYmxRm89LuZdGTkVWomfSd/7Wz83GI41uHg/mDo/vtT95zPzGbZdd1n8+91rW19Xz/SM08REWMi4Twf38bgkSPUUcIL/UgUWPUGcJLOUi0GBIhvFSDRIkhGcJLMUjjMZoI4aUWpNEYTYbwUgrSWIwYIbxUgjQSI2YIL4Ug4jE0hPC0BxGNoSmEpzmIWIzV3Y2RC/FlyDrSITytQURi8CWabuu/C1mnqRBe1SDta+9P5vv/PiQBkW5x9MryDYfwZj8eDkJPv1uyfRIS8RZHz5eMFMKrEGSThES9xdHiNnMRQ3'+
			'gcxG1LqQvdyo6tCpEY7rN16bdFpe/3F8ptS79UkNRucVRk+ddvelxbCK9MEMlbHIkcTRUP/vvHHQY+NJauuN3k5av5LI2Obx18RUq5Q9e9latrXbfdV07//NnH0/zzJ7cf/UZCRC/V6ex8uJ5n2aah7ANraGoLM57fPrhPCeBtL7KVxYSVt/3d/P+709FE9RWJAAAAAAAAAAAAAAAAAAAAAGc8BeH8W12fSr99AAAAAElFTkSuQmCC';
		me.__601__img.ggOverSrc=hs;
		el.ggId="6.0.1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__601.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__601.onclick=function (e) {
			player.setVariableValue('vis_localizacao', false);
				me.__600.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__600.ggUpdateText();
			me.__600.ggTextDiv.scrollTop = 0;
		}
		me.__601.onmouseenter=function (e) {
			me.__601__img.src=me.__601__img.ggOverSrc;
			me.elementMouseOver['_601']=true;
		}
		me.__601.onmouseleave=function (e) {
			me.__601__img.src=me.__601__img.ggNormalSrc;
			me.elementMouseOver['_601']=false;
		}
		me.__601.ggUpdatePosition=function (useTransition) {
		}
		me.__60localicacao.appendChild(me.__601);
		me.divSkin.appendChild(me.__60localicacao);
		el=me.__70helpdesktop=document.createElement('div');
		el.ggId="7.0-HELP-DESKTOP";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 555px;';
		hs+='left : calc(50% - ((500px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((555px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70helpdesktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__70helpdesktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_help') == true)) && 
				((player.getVariableValue('var_respphone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__70helpdesktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__70helpdesktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__70helpdesktop.style.transition='';
				if (me.__70helpdesktop.ggCurrentLogicStateVisible == 0) {
					me.__70helpdesktop.style.visibility=(Number(me.__70helpdesktop.style.opacity)>0||!me.__70helpdesktop.style.opacity)?'inherit':'hidden';
					me.__70helpdesktop.ggVisible=true;
				}
				else {
					me.__70helpdesktop.style.visibility="hidden";
					me.__70helpdesktop.ggVisible=false;
				}
			}
		}
		me.__70helpdesktop.logicBlock_visible();
		me.__70helpdesktop.ggUpdatePosition=function (useTransition) {
		}
		el=me.__700=document.createElement('div');
		el.ggId="7.0.0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(14.4px); background: rgba(242, 152, 41, 0.58);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__700.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__700.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7000=document.createElement('div');
		els=me.__7000__img=document.createElement('img');
		els.className='ggskin ggskin__7000';
		hs=basePath + 'images/_7000.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="7.0.0.0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 435px;';
		hs+='left : calc(50% - ((390px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 390px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7000.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7000.ggUpdatePosition=function (useTransition) {
		}
		me.__700.appendChild(me.__7000);
		el=me.__7001=document.createElement('div');
		els=me.__7001__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="7.0.0.1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7001.ggUpdateText=function() {
			var params = [];
			var hs = player._("COMO NAVEGAR NO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7001.ggUpdateText();
		el.appendChild(els);
		me.__7001.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7001.ggUpdatePosition=function (useTransition) {
		}
		me.__700.appendChild(me.__7001);
		el=me.__7002=document.createElement('div');
		els=me.__7002__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="7.0.0.2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_bold";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 30px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7002.ggUpdateText=function() {
			var params = [];
			var hs = player._("TOUR VIRTUAL 360\xba", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7002.ggUpdateText();
		el.appendChild(els);
		me.__7002.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7002.ggUpdatePosition=function (useTransition) {
		}
		me.__700.appendChild(me.__7002);
		el=me.__7003=document.createElement('div');
		els=me.__7003__img=document.createElement('img');
		els.className='ggskin ggskin__7003';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABkCAYAAACSPo4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKVSURBVHgB7dztbdswEIDhcyfoBvUIGSEjZIN2hGzAEdIN0m7QDYxO4G6gEZoNrpRNoUTg2DyKlEjrfQD+i60TXssfkWURAAAAAAAAAAAAAAAAIIuqPvs16Nlfv1792kvjxhn9egkzj45+fZVe+eF/6GVDy0FCiOGD2V+lN37ob3rd0GKQGyEmz9KTcFjfMrQUJDHEaW7piaYbWghiCHEiPdH/L3zNB7GGGPdNKvkkdfwy/O3er8MaQcI2D2GGVJZ9W194tFmOjsWPkIwj4nRUaEOvc8n80A/aaJAZIR6kVy0G2WSISUtBNh1i0kIQQkTWDEKIC9YIQogrlg'+
			'xCiAR+Zx/VbrAEyQwxepKt0dv/2c0OMiNEv+cs5qoRhBAzlAxCiAJKBCFEQTOCfCZEBZlBjpp2ZpEQVplBCFFL5SCEsKoUhBC5CgchxFyFghCilJlBCFGSnj9LDGo3jLcVlBFC5HyOmBwJUkCBEAQpoWAIgsxRIQRBclQMQRArrRtichBcpx9f7XSNC8uqv6uQlpIbIrq9UzuCvDc3RHQ/Tu0IMikVIro/p3YEKR0iul+ndtsNUitEdP9O7bYXpHaIaDtO7bYTZKkQ0fac2t1/kKVDRNt1ane/QdYKEW3fqd39BVk7RDSHU7v7CdJKiGgep3b9B2ktRDSXU7t+g/jhv6td9RDRfE7t7vInjlYNEc3p1K6vb5uo/ZzE4iGiWZ3a9HUuRG1WCxHN6ywDS080/WrWZp6DNf3NRrWfOKrCD3xI2KnmXgwTg/T1Iq7na727'+
			'3KGEIHvpjR/6SS9/JfNFGqfnn1F9b3zqrXqN+E4qCo+iR7+++PXm15/dbvdbOhBmn97GjrP/9LO/CQAAAAAAAAAAAAAAQE/+AfnsO4thAFn1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="7.0.0.3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7003.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7003.onclick=function (e) {
			player.setVariableValue('var_help', false);
		}
		me.__7003.ggUpdatePosition=function (useTransition) {
		}
		me.__700.appendChild(me.__7003);
		me.__70helpdesktop.appendChild(me.__700);
		me.divSkin.appendChild(me.__70helpdesktop);
		el=me.__70helpmobile=document.createElement('div');
		el.ggId="7.0-HELP-MOBILE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 450px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((450px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70helpmobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__70helpmobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('var_help') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__70helpmobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__70helpmobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__70helpmobile.style.transition='';
				if (me.__70helpmobile.ggCurrentLogicStateVisible == 0) {
					me.__70helpmobile.style.visibility=(Number(me.__70helpmobile.style.opacity)>0||!me.__70helpmobile.style.opacity)?'inherit':'hidden';
					me.__70helpmobile.ggVisible=true;
				}
				else {
					me.__70helpmobile.style.visibility="hidden";
					me.__70helpmobile.ggVisible=false;
				}
			}
		}
		me.__70helpmobile.logicBlock_visible();
		me.__70helpmobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__700mobile=document.createElement('div');
		el.ggId="7.0.0-MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(14.4px); background: rgba(242, 152, 41, 0.58);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__700mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__700mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7000mobile=document.createElement('div');
		els=me.__7000mobile__img=document.createElement('img');
		els.className='ggskin ggskin__7000mobile';
		hs=basePath + 'images/_7000mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="7.0.0.0-MOBILE";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 321px;';
		hs+='left : calc(50% - ((290px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((321px + 0px) / 2) + 45px);';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7000mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7000mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__700mobile.appendChild(me.__7000mobile);
		el=me.__7001mobile=document.createElement('div');
		els=me.__7001mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="7.0.0.1-MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7001mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("COMO NAVEGAR NO", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7001mobile.ggUpdateText();
		el.appendChild(els);
		me.__7001mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7001mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__700mobile.appendChild(me.__7001mobile);
		el=me.__7002mobile=document.createElement('div');
		els=me.__7002mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="7.0.0.2-MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_bold";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 30px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__7002mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("TOUR VIRTUAL 360\xba", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__7002mobile.ggUpdateText();
		el.appendChild(els);
		me.__7002mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7002mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__700mobile.appendChild(me.__7002mobile);
		el=me.__7003mobile=document.createElement('div');
		els=me.__7003mobile__img=document.createElement('img');
		els.className='ggskin ggskin__7003mobile';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABkCAYAAACSPo4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKVSURBVHgB7dztbdswEIDhcyfoBvUIGSEjZIN2hGzAEdIN0m7QDYxO4G6gEZoNrpRNoUTg2DyKlEjrfQD+i60TXssfkWURAAAAAAAAAAAAAAAAIIuqPvs16Nlfv1792kvjxhn9egkzj45+fZVe+eF/6GVDy0FCiOGD2V+lN37ob3rd0GKQGyEmz9KTcFjfMrQUJDHEaW7piaYbWghiCHEiPdH/L3zNB7GGGPdNKvkkdfwy/O3er8MaQcI2D2GGVJZ9W194tFmOjsWPkIwj4nRUaEOvc8n80A/aaJAZIR6kVy0G2WSISUtBNh1i0kIQQkTWDEKIC9YIQogrlg'+
			'xCiAR+Zx/VbrAEyQwxepKt0dv/2c0OMiNEv+cs5qoRhBAzlAxCiAJKBCFEQTOCfCZEBZlBjpp2ZpEQVplBCFFL5SCEsKoUhBC5CgchxFyFghCilJlBCFGSnj9LDGo3jLcVlBFC5HyOmBwJUkCBEAQpoWAIgsxRIQRBclQMQRArrRtichBcpx9f7XSNC8uqv6uQlpIbIrq9UzuCvDc3RHQ/Tu0IMikVIro/p3YEKR0iul+ndtsNUitEdP9O7bYXpHaIaDtO7bYTZKkQ0fac2t1/kKVDRNt1ane/QdYKEW3fqd39BVk7RDSHU7v7CdJKiGgep3b9B2ktRDSXU7t+g/jhv6td9RDRfE7t7vInjlYNEc3p1K6vb5uo/ZzE4iGiWZ3a9HUuRG1WCxHN6ywDS080/WrWZp6DNf3NRrWfOKrCD3xI2KnmXgwTg/T1Iq7na727'+
			'3KGEIHvpjR/6SS9/JfNFGqfnn1F9b3zqrXqN+E4qCo+iR7+++PXm15/dbvdbOhBmn97GjrP/9LO/CQAAAAAAAAAAAAAAQE/+AfnsO4thAFn1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="7.0.0.3-MOBILE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7003mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7003mobile.onclick=function (e) {
			player.setVariableValue('var_help', false);
		}
		me.__7003mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__700mobile.appendChild(me.__7003mobile);
		me.__70helpmobile.appendChild(me.__700mobile);
		me.divSkin.appendChild(me.__70helpmobile);
		el=me._telainicial=document.createElement('div');
		el.ggId="telainicial";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._telainicial.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._telainicial.ggUpdatePosition=function (useTransition) {
		}
		el=me._timeranimation=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="timer-animation";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 299px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timeranimation.ggIsActive=function() {
			return (me._timeranimation.ggTimestamp + me._timeranimation.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timeranimation.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timeranimation.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timeranimation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timeranimation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timeranimation.style.transition='opacity 1000ms ease 0ms';
				if (me._timeranimation.ggCurrentLogicStateVisible == 0) {
					me._timeranimation.style.visibility="hidden";
					me._timeranimation.ggVisible=false;
				}
				else {
					me._timeranimation.style.visibility="hidden";
					me._timeranimation.ggVisible=false;
				}
			}
		}
		me._timeranimation.logicBlock_visible();
		me._timeranimation.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._timeranimation.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._timeranimation.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._timeranimation.style.transition='opacity 1000ms ease 0ms';
				if (me._timeranimation.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._timeranimation.style.opacity == 0.0) { me._timeranimation.style.visibility="hidden"; } }, 1005);
					me._timeranimation.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._timeranimation.style.opacity == 0.0) { me._timeranimation.style.visibility="hidden"; } }, 1005);
					me._timeranimation.style.opacity=0;
				}
			}
		}
		me._timeranimation.logicBlock_alpha();
		me._timeranimation.ggDeactivate=function () {
			if (
				(
					((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
				)
			) {
				me._loading.style.transition='none';
				me._loading.style.visibility='hidden';
				me._loading.ggVisible=false;
			}
			if (
				(
					((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
				)
			) {
				me._img_mobile_2.style.transition='none';
				me._img_mobile_2.style.visibility='hidden';
				me._img_mobile_2.ggVisible=false;
			}
			if (
				(
					((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ativar_musica.style.transition='none';
				} else {
					me._ativar_musica.style.transition='all 2000ms ease 0ms';
				}
				me._ativar_musica.style.opacity='1';
				me._ativar_musica.style.visibility=me._ativar_musica.ggVisible?'inherit':'hidden';
			}
		}
		me._timeranimation.ggCurrentLogicStateVisible = -1;
		me._timeranimation.ggCurrentLogicStateAlpha = -1;
		me._timeranimation.ggUpdateConditionTimer=function () {
			me._timeranimation.logicBlock_visible();
		}
		me._timeranimation.ggUpdatePosition=function (useTransition) {
		}
		me._telainicial.appendChild(me._timeranimation);
		el=me._blackscreentint=document.createElement('div');
		el.ggId="black-screen-tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(17px) saturate(200%); background-color: rgba(255, 255, 255, 0.41);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blackscreentint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blackscreentint.ggUpdatePosition=function (useTransition) {
		}
		el=me._img_mobile_2=document.createElement('div');
		els=me._img_mobile_2__img=document.createElement('img');
		els.className='ggskin ggskin_img_mobile_2';
		hs=basePath + 'images/img_mobile_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="IMG_MOBILE_2";
		el.ggDx=0;
		el.ggDy=-78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 212px;';
		hs+='left : calc(50% - ((425px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((212px + 0px) / 2) - 78px);';
		hs+='visibility : inherit;';
		hs+='width : 425px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._img_mobile_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._img_mobile_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._img_mobile_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._img_mobile_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._img_mobile_2.style.transition='width 0s, height 0s';
				if (me._img_mobile_2.ggCurrentLogicStateSize == 0) {
					me._img_mobile_2.style.width='290px';
					me._img_mobile_2.style.height='144px';
					me._img_mobile_2.style.left = 'calc(50% - (290px / 2))';
					me._img_mobile_2.style.top = 'calc(50% - (144px / 2) - (0px / 2) + -78px)';
					skin.updateSize(me._img_mobile_2);
				}
				else {
					me._img_mobile_2.style.width='425px';
					me._img_mobile_2.style.height='212px';
					me._img_mobile_2.style.left = 'calc(50% - (425px / 2))';
					me._img_mobile_2.style.top = 'calc(50% - (212px / 2) - (0px / 2) + -78px)';
					skin.updateSize(me._img_mobile_2);
				}
			}
		}
		me._img_mobile_2.logicBlock_size();
		me._img_mobile_2.ggUpdatePosition=function (useTransition) {
		}
		me._blackscreentint.appendChild(me._img_mobile_2);
		me._telainicial.appendChild(me._blackscreentint);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 80px);';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._loading.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._loading.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._loading.style.transition='left 0s, top 0s';
				if (me._loading.ggCurrentLogicStatePosition == 0) {
					me._loading.style.left = 'calc(50% - (210px / 2))';
					me._loading.style.top = 'calc(50% - (60px / 2) - (0px / 2) + 40px)';
				}
				else {
					me._loading.style.left='calc(50% - ((210px + 0px) / 2) + 0px)';
					me._loading.style.top='calc(50% - ((60px + 0px) / 2) + 80px)';
				}
			}
		}
		me._loading.logicBlock_position();
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(7,115,45,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var params = [];
			var hs = player._("O Tour Virtual esta carregando.\nPor favor, Aguarde...", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		me._telainicial.appendChild(me._loading);
		el=me._ativar_musica=document.createElement('div');
		el.ggId="ativar_musica";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 108px;';
		hs+='left : calc(50% - ((270px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((108px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ativar_musica.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ativar_musica.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_inicial') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ativar_musica.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ativar_musica.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ativar_musica.style.transition='opacity 1000ms ease 3000ms';
				if (me._ativar_musica.ggCurrentLogicStateAlpha == 0) {
					me._ativar_musica.style.visibility=me._ativar_musica.ggVisible?'inherit':'hidden';
					me._ativar_musica.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ativar_musica.style.opacity == 0.0) { me._ativar_musica.style.visibility="hidden"; } }, 4005);
					me._ativar_musica.style.opacity=0;
				}
			}
		}
		me._ativar_musica.logicBlock_alpha();
		me._ativar_musica.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_ativar=document.createElement('div');
		els=me._texto_ativar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TEXTO ATIVAR";
		el.ggDx=0;
		el.ggDy=-24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_bold";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 24px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 2px 3px #000000;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 24px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._texto_ativar.ggUpdateText=function() {
			var params = [];
			var hs = player._("ATIVAR SOM?", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._texto_ativar.ggUpdateText();
		el.appendChild(els);
		me._texto_ativar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_ativar.ggUpdatePosition=function (useTransition) {
		}
		me._ativar_musica.appendChild(me._texto_ativar);
		el=me._bt_sim=document.createElement('div');
		els=me._bt_sim__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bt_sim";
		el.ggDx=-56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(136,136,136,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95px + 0px) / 2) - 56px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 95px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._bt_sim.ggUpdateText=function() {
			var params = [];
			var hs = player._("SIM", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._bt_sim.ggUpdateText();
		el.appendChild(els);
		me._bt_sim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bt_sim.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bt_sim'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bt_sim.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bt_sim.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bt_sim.style.transition='background-color 500ms ease 0ms';
				if (me._bt_sim.ggCurrentLogicStateBackgroundColor == 0) {
					me._bt_sim.style.backgroundColor="rgba(89,89,89,0.784314)";
				}
				else {
					me._bt_sim.style.backgroundColor="rgba(136,136,136,0.784314)";
				}
			}
		}
		me._bt_sim.logicBlock_backgroundcolor();
		me._bt_sim.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._blackscreentint.style.transition='none';
			} else {
				me._blackscreentint.style.transition='all 4000ms ease 0ms';
			}
			me._blackscreentint.style.opacity='0';
			me._blackscreentint.style.visibility='hidden';
			player.moveToDefaultViewEx(2.5,0);
			if (player.transitionsDisabled) {
				me._bt_sim.style.transition='none';
			} else {
				me._bt_sim.style.transition='all 1000ms ease 0ms';
			}
			me._bt_sim.style.opacity='0';
			me._bt_sim.style.visibility='hidden';
			player.setVariableValue('vis_inicial', true);
				player.playSound("locucao","1");
				player.playSound("backgroundmusic","5");
			me._ativar_musica.style.transition='none';
			me._ativar_musica.style.visibility='hidden';
			me._ativar_musica.ggVisible=false;
			player.setVariableValue('var_audio', true);
		}
		me._bt_sim.onmouseenter=function (e) {
			me.elementMouseOver['bt_sim']=true;
			me._bt_sim.logicBlock_backgroundcolor();
		}
		me._bt_sim.onmouseleave=function (e) {
			me.elementMouseOver['bt_sim']=false;
			me._bt_sim.logicBlock_backgroundcolor();
		}
		me._bt_sim.ggUpdatePosition=function (useTransition) {
		}
		me._ativar_musica.appendChild(me._bt_sim);
		el=me._bt_no=document.createElement('div');
		els=me._bt_no__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bt_n\xe3o";
		el.ggDx=56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(136,136,136,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((95px + 0px) / 2) + 56px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 95px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._bt_no.ggUpdateText=function() {
			var params = [];
			var hs = player._("N\xc3O", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._bt_no.ggUpdateText();
		el.appendChild(els);
		me._bt_no.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bt_no.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bt_no'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bt_no.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bt_no.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bt_no.style.transition='background-color 500ms ease 0ms';
				if (me._bt_no.ggCurrentLogicStateBackgroundColor == 0) {
					me._bt_no.style.backgroundColor="rgba(89,89,89,0.784314)";
				}
				else {
					me._bt_no.style.backgroundColor="rgba(136,136,136,0.784314)";
				}
			}
		}
		me._bt_no.logicBlock_backgroundcolor();
		me._bt_no.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._blackscreentint.style.transition='none';
			} else {
				me._blackscreentint.style.transition='all 4000ms ease 0ms';
			}
			me._blackscreentint.style.opacity='0';
			me._blackscreentint.style.visibility='hidden';
			player.moveToDefaultViewEx(2.5,0);
			if (player.transitionsDisabled) {
				me._bt_no.style.transition='none';
			} else {
				me._bt_no.style.transition='all 1000ms ease 0ms';
			}
			me._bt_no.style.opacity='0';
			me._bt_no.style.visibility='hidden';
			player.setVariableValue('vis_inicial', true);
				player.playSound("locucao","1");
				player.playSound("backgroundmusic","5");
			player.setVolume("_main",0);
			me._ativar_musica.style.transition='none';
			me._ativar_musica.style.visibility='hidden';
			me._ativar_musica.ggVisible=false;
			player.setVariableValue('var_audio', false);
		}
		me._bt_no.onmouseenter=function (e) {
			me.elementMouseOver['bt_no']=true;
			me._bt_no.logicBlock_backgroundcolor();
		}
		me._bt_no.onmouseleave=function (e) {
			me.elementMouseOver['bt_no']=false;
			me._bt_no.logicBlock_backgroundcolor();
		}
		me._bt_no.ggUpdatePosition=function (useTransition) {
		}
		me._ativar_musica.appendChild(me._bt_no);
		me._telainicial.appendChild(me._ativar_musica);
		me.divSkin.appendChild(me._telainicial);
		me.__10barrasuperior.logicBlock_alpha();
		me.__101button_fullscreen.logicBlock_scaling();
		me.__101button_fullscreen.logicBlock_visible();
		me.elementMouseOver['_101button_fullscreen']=false;
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_fullscreen.logicBlock_visible();
		me.__102button_mute.logicBlock_scaling();
		me.elementMouseOver['_102button_mute']=false;
		me._unmute.logicBlock_visible();
		me._mute.logicBlock_visible();
		me.__60localicacao_mobile.logicBlock_position();
		me.__60localicacao_mobile.logicBlock_visible();
		me.__60localicacao_mobile.logicBlock_alpha();
		me.__20barrainferior.logicBlock_alpha();
		me.__201.logicBlock_visible();
		me.__2010.logicBlock_scaling();
		me.__2010.logicBlock_backgroundcolor();
		me.elementMouseOver['_2010']=false;
		me.__2011.logicBlock_scaling();
		me.__2011.logicBlock_backgroundcolor();
		me.elementMouseOver['_2011']=false;
		me.__2012.logicBlock_scaling();
		me.__2012.logicBlock_visible();
		me.__2012.logicBlock_backgroundcolor();
		me.elementMouseOver['_2012']=false;
		me.__201_mobile.logicBlock_visible();
		me.__2010_mobile.logicBlock_scaling();
		me.__2010_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_2010_mobile']=false;
		me.__2011_mobile.logicBlock_scaling();
		me.__2011_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_2011_mobile']=false;
		me.__2012_mobile.logicBlock_scaling();
		me.__2012_mobile.logicBlock_visible();
		me.__2012_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_2012_mobile']=false;
		me.__202.logicBlock_scaling();
		me.elementMouseOver['_202']=false;
		me.__40menu.logicBlock_position();
		me.__40menu.logicBlock_visible();
		me.__40menu.logicBlock_alpha();
		me.__40menu_mobile.logicBlock_position();
		me.__40menu_mobile.logicBlock_visible();
		me.__40menu_mobile.logicBlock_alpha();
		me.__30logotipo.logicBlock_visible();
		me.__30logotipo.logicBlock_alpha();
		me.__30logotipo_mobile.logicBlock_visible();
		me.__30logotipo_mobile.logicBlock_alpha();
		me.__50btabrirfechar.logicBlock_position();
		me.__50btabrirfechar.logicBlock_visible();
		me.__50btabrirfechar.logicBlock_alpha();
		me.elementMouseOver['_50btabrirfechar']=false;
		me.__500.logicBlock_backgroundcolor();
		me.elementMouseOver['_500']=false;
		me.__5001.logicBlock_position();
		me.__5001.logicBlock_angle();
		me.__5002.logicBlock_alpha();
		me.__5002.logicBlock_textcolor();
		me.__5003.logicBlock_alpha();
		me.__5003.logicBlock_textcolor();
		me.__50btabrirfechar_mobile.logicBlock_position();
		me.__50btabrirfechar_mobile.logicBlock_visible();
		me.__50btabrirfechar_mobile.logicBlock_alpha();
		me.elementMouseOver['_50btabrirfechar_mobile']=false;
		me.__500_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_500_mobile']=false;
		me.__5001_mobile.logicBlock_position();
		me.__5001_mobile.logicBlock_angle();
		me.__5002_mobile.logicBlock_alpha();
		me.__5002_mobile.logicBlock_textcolor();
		me.__5003_mobile.logicBlock_alpha();
		me.__5003_mobile.logicBlock_textcolor();
		el = me._fonts;
		;
		me.__60localicacao.logicBlock_position();
		me.__60localicacao.logicBlock_visible();
		me.__60localicacao.logicBlock_alpha();
		me.elementMouseOver['_601']=false;
		me.__70helpdesktop.logicBlock_visible();
		me.__70helpmobile.logicBlock_visible();
		me._timeranimation.logicBlock_visible();
		me._timeranimation.logicBlock_alpha();
		me._img_mobile_2.logicBlock_size();
		me._loading.logicBlock_position();
		me._ativar_musica.logicBlock_alpha();
		me._bt_sim.logicBlock_backgroundcolor();
		me.elementMouseOver['bt_sim']=false;
		me._bt_no.logicBlock_backgroundcolor();
		me.elementMouseOver['bt_no']=false;
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me.__401_mobile.ggInstances.length; i++) {
				me.__401_mobile.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me.__401.ggInstances.length; i++) {
				me.__401.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			me.__2012.logicBlock_visible();
			me.__2012_mobile.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me.__401_mobile.ggInstances.length; i++) {
				me.__401_mobile.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me.__401.ggInstances.length; i++) {
				me.__401.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpa')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpa'].length; i++) {
					hotspotTemplates['ht_node_pin_carpa'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto1'].length; i++) {
					hotspotTemplates['ht_node_pin_posto1'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto2')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto2'].length; i++) {
					hotspotTemplates['ht_node_pin_posto2'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_veterinaria')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_veterinaria'].length; i++) {
					hotspotTemplates['ht_node_pin_veterinaria'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpaagricola')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpaagricola'].length; i++) {
					hotspotTemplates['ht_node_pin_carpaagricola'][i].ggEvent_changenode();
				}
			}
			me.__10barrasuperior.logicBlock_alpha();
			me.__101button_fullscreen.logicBlock_scaling();
			me.__102button_mute.logicBlock_scaling();
			me._unmute.logicBlock_visible();
			me._mute.logicBlock_visible();
			me.__60localicacao_mobile.logicBlock_position();
			me.__60localicacao_mobile.logicBlock_visible();
			me.__60localicacao_mobile.logicBlock_alpha();
			me.__20barrainferior.logicBlock_alpha();
			me.__201.logicBlock_visible();
			me.__2012.logicBlock_visible();
			me.__201_mobile.logicBlock_visible();
			me.__2012_mobile.logicBlock_visible();
			me.__40menu.logicBlock_position();
			me.__40menu.logicBlock_visible();
			me.__40menu.logicBlock_alpha();
			me.__401.ggUpdateConditionNodeChange();
			me.__40menu_mobile.logicBlock_position();
			me.__40menu_mobile.logicBlock_visible();
			me.__40menu_mobile.logicBlock_alpha();
			me.__401_mobile.ggUpdateConditionNodeChange();
			me.__30logotipo.logicBlock_visible();
			me.__30logotipo.logicBlock_alpha();
			me.__30logotipo_mobile.logicBlock_visible();
			me.__30logotipo_mobile.logicBlock_alpha();
			me.__50btabrirfechar.logicBlock_position();
			me.__50btabrirfechar.logicBlock_visible();
			me.__50btabrirfechar.logicBlock_alpha();
			me.__5001.logicBlock_position();
			me.__5001.logicBlock_angle();
			me.__5002.logicBlock_alpha();
			me.__5003.logicBlock_alpha();
			me.__50btabrirfechar_mobile.logicBlock_position();
			me.__50btabrirfechar_mobile.logicBlock_visible();
			me.__50btabrirfechar_mobile.logicBlock_alpha();
			me.__5001_mobile.logicBlock_position();
			me.__5001_mobile.logicBlock_angle();
			me.__5002_mobile.logicBlock_alpha();
			me.__5003_mobile.logicBlock_alpha();
			me.__60localicacao.logicBlock_position();
			me.__60localicacao.logicBlock_visible();
			me.__60localicacao.logicBlock_alpha();
			me.__70helpdesktop.logicBlock_visible();
			me.__70helpmobile.logicBlock_visible();
			me._timeranimation.logicBlock_visible();
			me._img_mobile_2.logicBlock_size();
			me._loading.logicBlock_position();
			me._ativar_musica.logicBlock_alpha();
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me.__401_mobile.ggInstances.length; i++) {
				me.__401_mobile.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me.__401.ggInstances.length; i++) {
				me.__401.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpa')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpa'].length; i++) {
					hotspotTemplates['ht_node_pin_carpa'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto1'].length; i++) {
					hotspotTemplates['ht_node_pin_posto1'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto2')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto2'].length; i++) {
					hotspotTemplates['ht_node_pin_posto2'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_veterinaria')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_veterinaria'].length; i++) {
					hotspotTemplates['ht_node_pin_veterinaria'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpaagricola')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpaagricola'].length; i++) {
					hotspotTemplates['ht_node_pin_carpaagricola'][i].ggEvent_configloaded();
				}
			}
			me.__10barrasuperior.logicBlock_alpha();
			me.__101button_fullscreen.logicBlock_scaling();
			me.__101button_fullscreen.logicBlock_visible();
			me.__102button_mute.logicBlock_scaling();
			me._unmute.logicBlock_visible();
			me._mute.logicBlock_visible();
			me.__60localicacao_mobile.logicBlock_position();
			me.__60localicacao_mobile.logicBlock_visible();
			me.__60localicacao_mobile.logicBlock_alpha();
			me.__20barrainferior.logicBlock_alpha();
			me.__201.logicBlock_visible();
			me.__2012.logicBlock_visible();
			me.__201_mobile.logicBlock_visible();
			me.__2012_mobile.logicBlock_visible();
			me.__40menu.logicBlock_position();
			me.__40menu.logicBlock_visible();
			me.__40menu.logicBlock_alpha();
			me.__40menu_mobile.logicBlock_position();
			me.__40menu_mobile.logicBlock_visible();
			me.__40menu_mobile.logicBlock_alpha();
			me.__30logotipo.logicBlock_visible();
			me.__30logotipo.logicBlock_alpha();
			me.__30logotipo_mobile.logicBlock_visible();
			me.__30logotipo_mobile.logicBlock_alpha();
			me.__50btabrirfechar.logicBlock_position();
			me.__50btabrirfechar.logicBlock_visible();
			me.__50btabrirfechar.logicBlock_alpha();
			me.__5001.logicBlock_position();
			me.__5001.logicBlock_angle();
			me.__5002.logicBlock_alpha();
			me.__5003.logicBlock_alpha();
			me.__50btabrirfechar_mobile.logicBlock_position();
			me.__50btabrirfechar_mobile.logicBlock_visible();
			me.__50btabrirfechar_mobile.logicBlock_alpha();
			me.__5001_mobile.logicBlock_position();
			me.__5001_mobile.logicBlock_angle();
			me.__5002_mobile.logicBlock_alpha();
			me.__5003_mobile.logicBlock_alpha();
			me.__60localicacao.logicBlock_position();
			me.__60localicacao.logicBlock_visible();
			me.__60localicacao.logicBlock_alpha();
			me.__70helpdesktop.logicBlock_visible();
			me.__70helpmobile.logicBlock_visible();
			me._timeranimation.ggTimestamp=skin.ggCurrentTime;
			me._timeranimation.ggTimeout=2000;
			me._img_mobile_2.logicBlock_size();
			me._loading.logicBlock_position();
			player.setProjection(9);
			player.setPanTiltFov(180,-90,330);
			me._ativar_musica.logicBlock_alpha();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpa')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpa'].length; i++) {
					hotspotTemplates['ht_node_pin_carpa'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto1'].length; i++) {
					hotspotTemplates['ht_node_pin_posto1'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto2')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto2'].length; i++) {
					hotspotTemplates['ht_node_pin_posto2'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_veterinaria')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_veterinaria'].length; i++) {
					hotspotTemplates['ht_node_pin_veterinaria'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpaagricola')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpaagricola'].length; i++) {
					hotspotTemplates['ht_node_pin_carpaagricola'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('projectionchanged', function(event) {
			me._timeranimation.logicBlock_alpha();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_var_respphone.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('tilesrequested', function(event) {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me.__60localicacao_mobile.logicBlock_visible();
			me.__201.logicBlock_visible();
			me.__201_mobile.logicBlock_visible();
			me.__40menu.logicBlock_visible();
			me.__40menu_mobile.logicBlock_visible();
			me.__50btabrirfechar.logicBlock_visible();
			me.__50btabrirfechar_mobile.logicBlock_visible();
			me.__60localicacao.logicBlock_visible();
			me.__70helpmobile.logicBlock_visible();
		});
		player.addListener('varchanged_var_audio', function(event) {
			me._unmute.logicBlock_visible();
			me._mute.logicBlock_visible();
		});
		player.addListener('varchanged_var_help', function(event) {
			me.__70helpdesktop.logicBlock_visible();
			me.__70helpmobile.logicBlock_visible();
		});
		player.addListener('varchanged_var_menu', function(event) {
			me.__40menu.logicBlock_position();
			me.__40menu_mobile.logicBlock_position();
			me.__50btabrirfechar.logicBlock_position();
			me.__5001.logicBlock_position();
			me.__5001.logicBlock_angle();
			me.__5002.logicBlock_alpha();
			me.__5003.logicBlock_alpha();
			me.__50btabrirfechar_mobile.logicBlock_position();
			me.__5001_mobile.logicBlock_position();
			me.__5001_mobile.logicBlock_angle();
			me.__5002_mobile.logicBlock_alpha();
			me.__5003_mobile.logicBlock_alpha();
		});
		player.addListener('varchanged_var_respphone', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_var_respphone();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpa')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpa'].length; i++) {
					hotspotTemplates['ht_node_pin_carpa'][i].ggEvent_varchanged_var_respphone();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto1'].length; i++) {
					hotspotTemplates['ht_node_pin_posto1'][i].ggEvent_varchanged_var_respphone();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_posto2')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_posto2'].length; i++) {
					hotspotTemplates['ht_node_pin_posto2'][i].ggEvent_varchanged_var_respphone();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_veterinaria')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_veterinaria'].length; i++) {
					hotspotTemplates['ht_node_pin_veterinaria'][i].ggEvent_varchanged_var_respphone();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_pin_carpaagricola')) {
				for(var i = 0; i < hotspotTemplates['ht_node_pin_carpaagricola'].length; i++) {
					hotspotTemplates['ht_node_pin_carpaagricola'][i].ggEvent_varchanged_var_respphone();
				}
			}
			me.__101button_fullscreen.logicBlock_scaling();
			me.__102button_mute.logicBlock_scaling();
			me.__30logotipo.logicBlock_visible();
			me.__30logotipo_mobile.logicBlock_visible();
			me.__70helpdesktop.logicBlock_visible();
			me._img_mobile_2.logicBlock_size();
			me._loading.logicBlock_position();
		});
		player.addListener('varchanged_vis_inicial', function(event) {
			me.__10barrasuperior.logicBlock_alpha();
			me.__20barrainferior.logicBlock_alpha();
			me.__40menu.logicBlock_alpha();
			me.__40menu_mobile.logicBlock_alpha();
			me.__30logotipo.logicBlock_alpha();
			me.__30logotipo_mobile.logicBlock_alpha();
			me.__50btabrirfechar.logicBlock_alpha();
			me.__50btabrirfechar_mobile.logicBlock_alpha();
			me._ativar_musica.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_localizacao', function(event) {
			me.__60localicacao_mobile.logicBlock_position();
			me.__60localicacao_mobile.logicBlock_alpha();
			me.__60localicacao.logicBlock_position();
			me.__60localicacao.logicBlock_alpha();
		});
		player.addListener('viewerinit', function(event) {
			me.__401.ggUpdate();
			me.__401_mobile.ggUpdate();
		});
	};
	function SkinCloner__401_mobile_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__4010_mobile=document.createElement('div');
		el.ggId="4.0.1.0_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4010_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4010_mobile.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__4010_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4010_1_mobile=document.createElement('div');
		el.ggId="4.0.1.0_1_MOBILE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29829;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4010_1_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4010_1_mobile.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_4010_1_mobile'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4010_1_mobile.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4010_1_mobile.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4010_1_mobile.style.transition='background-color 500ms ease 0ms';
				if (me.__4010_1_mobile.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4010_1_mobile.style.backgroundColor="rgba(242,118,46,1)";
				}
				else {
					me.__4010_1_mobile.style.backgroundColor="rgba(242,152,41,1)";
				}
			}
		}
		me.__4010_1_mobile.logicBlock_backgroundcolor();
		me.__4010_1_mobile.onclick=function (e) {
			player.setVariableValue('var_menu', true);
		}
		me.__4010_1_mobile.onmouseenter=function (e) {
			me.elementMouseOver['_4010_1_mobile']=true;
			me.__40102_mobile.logicBlock_angle();
			me.__40103_mobile.logicBlock_angle();
			me.__40104_mobile.logicBlock_angle();
			me.__40105_mobile.logicBlock_angle();
			me.__4010_1_mobile.logicBlock_backgroundcolor();
		}
		me.__4010_1_mobile.onmouseleave=function (e) {
			me.elementMouseOver['_4010_1_mobile']=false;
			me.__40102_mobile.logicBlock_angle();
			me.__40103_mobile.logicBlock_angle();
			me.__40104_mobile.logicBlock_angle();
			me.__40105_mobile.logicBlock_angle();
			me.__4010_1_mobile.logicBlock_backgroundcolor();
		}
		me.__4010_1_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40101_mobile=document.createElement('div');
		els=me.__40101_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="4.0.1.0.1_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_regular";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__40101_mobile.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__40101_mobile.ggUpdateText();
		player.addListener('changenode', function() {
			me.__40101_mobile.ggUpdateText();
		});
		el.appendChild(els);
		me.__40101_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40101_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1_mobile.appendChild(me.__40101_mobile);
		el=me.__40102_mobile=document.createElement('div');
		els=me.__40102_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__40102_mobile';
		hs=basePath + 'images/_40102_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.2_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40102_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40102_mobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1_mobile'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40102_mobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40102_mobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40102_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40102_mobile.ggCurrentLogicStateAngle == 0) {
					me.__40102_mobile.ggParameter.a = 359;
					me.__40102_mobile.style.transform=parameterToTransform(me.__40102_mobile.ggParameter);
				}
				else {
					me.__40102_mobile.ggParameter.a = 0;
					me.__40102_mobile.style.transform=parameterToTransform(me.__40102_mobile.ggParameter);
				}
			}
		}
		me.__40102_mobile.logicBlock_angle();
		me.__40102_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Clinica Veterin\xe1ria"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40102_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40102_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40102_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40102_mobile.ggCurrentLogicStateVisible == 0) {
					me.__40102_mobile.style.visibility=(Number(me.__40102_mobile.style.opacity)>0||!me.__40102_mobile.style.opacity)?'inherit':'hidden';
					me.__40102_mobile.ggVisible=true;
				}
				else {
					me.__40102_mobile.style.visibility="hidden";
					me.__40102_mobile.ggVisible=false;
				}
			}
		}
		me.__40102_mobile.logicBlock_visible();
		me.__40102_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1_mobile.appendChild(me.__40102_mobile);
		el=me.__40103_mobile=document.createElement('div');
		els=me.__40103_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__40103_mobile';
		hs=basePath + 'images/_40103_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.3_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40103_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40103_mobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1_mobile'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40103_mobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40103_mobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40103_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40103_mobile.ggCurrentLogicStateAngle == 0) {
					me.__40103_mobile.ggParameter.a = 359;
					me.__40103_mobile.style.transform=parameterToTransform(me.__40103_mobile.ggParameter);
				}
				else {
					me.__40103_mobile.ggParameter.a = 0;
					me.__40103_mobile.style.transform=parameterToTransform(me.__40103_mobile.ggParameter);
				}
			}
		}
		me.__40103_mobile.logicBlock_angle();
		me.__40103_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Inicio")) || 
				((player._(me.ggUserdata.title) == "Carpa Agrovet"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40103_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40103_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40103_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40103_mobile.ggCurrentLogicStateVisible == 0) {
					me.__40103_mobile.style.visibility=(Number(me.__40103_mobile.style.opacity)>0||!me.__40103_mobile.style.opacity)?'inherit':'hidden';
					me.__40103_mobile.ggVisible=true;
				}
				else {
					me.__40103_mobile.style.visibility="hidden";
					me.__40103_mobile.ggVisible=false;
				}
			}
		}
		me.__40103_mobile.logicBlock_visible();
		me.__40103_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1_mobile.appendChild(me.__40103_mobile);
		el=me.__40104_mobile=document.createElement('div');
		els=me.__40104_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__40104_mobile';
		hs=basePath + 'images/_40104_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.4_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40104_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40104_mobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1_mobile'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40104_mobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40104_mobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40104_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40104_mobile.ggCurrentLogicStateAngle == 0) {
					me.__40104_mobile.ggParameter.a = 359;
					me.__40104_mobile.style.transform=parameterToTransform(me.__40104_mobile.ggParameter);
				}
				else {
					me.__40104_mobile.ggParameter.a = 0;
					me.__40104_mobile.style.transform=parameterToTransform(me.__40104_mobile.ggParameter);
				}
			}
		}
		me.__40104_mobile.logicBlock_angle();
		me.__40104_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Carpa Agricola"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40104_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40104_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40104_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40104_mobile.ggCurrentLogicStateVisible == 0) {
					me.__40104_mobile.style.visibility=(Number(me.__40104_mobile.style.opacity)>0||!me.__40104_mobile.style.opacity)?'inherit':'hidden';
					me.__40104_mobile.ggVisible=true;
				}
				else {
					me.__40104_mobile.style.visibility="hidden";
					me.__40104_mobile.ggVisible=false;
				}
			}
		}
		me.__40104_mobile.logicBlock_visible();
		me.__40104_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1_mobile.appendChild(me.__40104_mobile);
		el=me.__40105_mobile=document.createElement('div');
		els=me.__40105_mobile__img=document.createElement('img');
		els.className='ggskin ggskin__40105_mobile';
		hs=basePath + 'images/_40105_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.5_MOBILE";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40105_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40105_mobile.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1_mobile'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40105_mobile.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40105_mobile.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40105_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40105_mobile.ggCurrentLogicStateAngle == 0) {
					me.__40105_mobile.ggParameter.a = 359;
					me.__40105_mobile.style.transform=parameterToTransform(me.__40105_mobile.ggParameter);
				}
				else {
					me.__40105_mobile.ggParameter.a = 0;
					me.__40105_mobile.style.transform=parameterToTransform(me.__40105_mobile.ggParameter);
				}
			}
		}
		me.__40105_mobile.logicBlock_angle();
		me.__40105_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Auto Posto 1")) || 
				((player._(me.ggUserdata.title) == "Auto Posto 2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40105_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40105_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40105_mobile.style.transition='transform 500ms ease 0ms';
				if (me.__40105_mobile.ggCurrentLogicStateVisible == 0) {
					me.__40105_mobile.style.visibility=(Number(me.__40105_mobile.style.opacity)>0||!me.__40105_mobile.style.opacity)?'inherit':'hidden';
					me.__40105_mobile.ggVisible=true;
				}
				else {
					me.__40105_mobile.style.visibility="hidden";
					me.__40105_mobile.ggVisible=false;
				}
			}
		}
		me.__40105_mobile.logicBlock_visible();
		me.__40105_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1_mobile.appendChild(me.__40105_mobile);
		me.__4010_mobile.appendChild(me.__4010_1_mobile);
		me.__div.appendChild(me.__4010_mobile);
		me.__4010_1_mobile.logicBlock_backgroundcolor();
		me.elementMouseOver['_4010_1_mobile']=false;
		me.__40102_mobile.logicBlock_angle();
		me.__40102_mobile.logicBlock_visible();
		me.__40103_mobile.logicBlock_angle();
		me.__40103_mobile.logicBlock_visible();
		me.__40104_mobile.logicBlock_angle();
		me.__40104_mobile.logicBlock_visible();
		me.__40105_mobile.logicBlock_angle();
		me.__40105_mobile.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function(event) {
				me.__40102_mobile.logicBlock_visible();
				me.__40103_mobile.logicBlock_visible();
				me.__40104_mobile.logicBlock_visible();
				me.__40105_mobile.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me.__40102_mobile.logicBlock_visible();
				me.__40103_mobile.logicBlock_visible();
				me.__40104_mobile.logicBlock_visible();
				me.__40105_mobile.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me.__40102_mobile.logicBlock_visible();
				me.__40103_mobile.logicBlock_visible();
				me.__40104_mobile.logicBlock_visible();
				me.__40105_mobile.logicBlock_visible();
			};
	};
	function SkinCloner__401_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__4010=document.createElement('div');
		el.ggId="4.0.1.0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4010.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4010.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__4010.onmouseenter=function (e) {
			me.elementMouseOver['_4010']=true;
			me.__4011.logicBlock_alpha();
			me.__4011.logicBlock_position();
		}
		me.__4010.onmouseleave=function (e) {
			me.elementMouseOver['_4010']=false;
			me.__4011.logicBlock_alpha();
			me.__4011.logicBlock_position();
		}
		me.__4010.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4011=document.createElement('div');
		el.ggId="4.0.1.1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29829;';
		hs+='border : 0px solid #000000;';
		hs+='height : 38px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4011.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_4010'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4011.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4011.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4011.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__4011.ggCurrentLogicStatePosition == 0) {
					me.__4011.style.right='-28px';
					me.__4011.style.top = 'calc(50% - (38px / 2))';
				}
				else {
					me.__4011.style.right='0px';
					me.__4011.style.top='calc(50% - ((38px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__4011.logicBlock_position();
		me.__4011.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__4011.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__4011.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__4011.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__4011.ggCurrentLogicStateAlpha == 0) {
					me.__4011.style.visibility=me.__4011.ggVisible?'inherit':'hidden';
					me.__4011.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__4011.style.opacity == 0.0) { me.__4011.style.visibility="hidden"; } }, 505);
					me.__4011.style.opacity=0;
				}
			}
		}
		me.__4011.logicBlock_alpha();
		me.__4011.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40110=document.createElement('div');
		el.ggId="4.0.1.1.0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29829;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='height : 120px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__401101=document.createElement('div');
		els=me.__401101__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/_401101_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.1.0.1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((166px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401101.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me.__401101.ggUpdatePosition=function (useTransition) {
		}
		me.__40110.appendChild(me.__401101);
		me.__4011.appendChild(me.__40110);
		me.__4010.appendChild(me.__4011);
		el=me.__4010_1=document.createElement('div');
		el.ggId="4.0.1.0_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f29829;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4010_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4010_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__4010_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__4010_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__4010_1.style.transition='background-color 500ms ease 0ms';
				if (me.__4010_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__4010_1.style.backgroundColor="rgba(66,140,92,1)";
				}
				else {
					me.__4010_1.style.backgroundColor="rgba(242,152,41,1)";
				}
			}
		}
		me.__4010_1.logicBlock_backgroundcolor();
		me.__4010_1.onmouseenter=function (e) {
			me.elementMouseOver['_4010_1']=true;
			me.__40102.logicBlock_angle();
			me.__40102.logicBlock_alpha();
			me.__401020.logicBlock_angle();
			me.__401020.logicBlock_alpha();
			me.__401030.logicBlock_angle();
			me.__401030.logicBlock_alpha();
			me.__40103.logicBlock_angle();
			me.__40103.logicBlock_alpha();
			me.__40104.logicBlock_angle();
			me.__40104.logicBlock_alpha();
			me.__401040.logicBlock_angle();
			me.__401040.logicBlock_alpha();
			me.__40105.logicBlock_angle();
			me.__40105.logicBlock_alpha();
			me.__401050.logicBlock_angle();
			me.__401050.logicBlock_alpha();
			me.__4010_1.logicBlock_backgroundcolor();
		}
		me.__4010_1.onmouseleave=function (e) {
			me.elementMouseOver['_4010_1']=false;
			me.__40102.logicBlock_angle();
			me.__40102.logicBlock_alpha();
			me.__401020.logicBlock_angle();
			me.__401020.logicBlock_alpha();
			me.__401030.logicBlock_angle();
			me.__401030.logicBlock_alpha();
			me.__40103.logicBlock_angle();
			me.__40103.logicBlock_alpha();
			me.__40104.logicBlock_angle();
			me.__40104.logicBlock_alpha();
			me.__401040.logicBlock_angle();
			me.__401040.logicBlock_alpha();
			me.__40105.logicBlock_angle();
			me.__40105.logicBlock_alpha();
			me.__401050.logicBlock_angle();
			me.__401050.logicBlock_alpha();
			me.__4010_1.logicBlock_backgroundcolor();
		}
		me.__4010_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40101=document.createElement('div');
		els=me.__40101__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="4.0.1.0.1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__40101.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__40101.ggUpdateText();
		player.addListener('changenode', function() {
			me.__40101.ggUpdateText();
		});
		el.appendChild(els);
		me.__40101.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40101.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__40101);
		el=me.__40102=document.createElement('div');
		els=me.__40102__img=document.createElement('img');
		els.className='ggskin ggskin__40102';
		hs=basePath + 'images/_40102.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40102.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40102.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40102.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40102.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40102.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40102.ggCurrentLogicStateAngle == 0) {
					me.__40102.ggParameter.a = 359;
					me.__40102.style.transform=parameterToTransform(me.__40102.ggParameter);
				}
				else {
					me.__40102.ggParameter.a = 0;
					me.__40102.style.transform=parameterToTransform(me.__40102.ggParameter);
				}
			}
		}
		me.__40102.logicBlock_angle();
		me.__40102.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Clinica Veterin\xe1ria"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40102.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40102.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40102.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40102.ggCurrentLogicStateVisible == 0) {
					me.__40102.style.visibility=(Number(me.__40102.style.opacity)>0||!me.__40102.style.opacity)?'inherit':'hidden';
					me.__40102.ggVisible=true;
				}
				else {
					me.__40102.style.visibility="hidden";
					me.__40102.ggVisible=false;
				}
			}
		}
		me.__40102.logicBlock_visible();
		me.__40102.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40102.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40102.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40102.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40102.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__40102.style.opacity == 0.0) { me.__40102.style.visibility="hidden"; } }, 505);
					me.__40102.style.opacity=0;
				}
				else {
					me.__40102.style.visibility=me.__40102.ggVisible?'inherit':'hidden';
					me.__40102.style.opacity=1;
				}
			}
		}
		me.__40102.logicBlock_alpha();
		me.__40102.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__40102);
		el=me.__401020=document.createElement('div');
		els=me.__401020__img=document.createElement('img');
		els.className='ggskin ggskin__401020';
		hs=basePath + 'images/_401020.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.2.0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401020.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401020.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__401020.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__401020.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__401020.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401020.ggCurrentLogicStateAngle == 0) {
					me.__401020.ggParameter.a = 359;
					me.__401020.style.transform=parameterToTransform(me.__401020.ggParameter);
				}
				else {
					me.__401020.ggParameter.a = 0;
					me.__401020.style.transform=parameterToTransform(me.__401020.ggParameter);
				}
			}
		}
		me.__401020.logicBlock_angle();
		me.__401020.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Clinica Veterin\xe1ria"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__401020.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__401020.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__401020.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401020.ggCurrentLogicStateVisible == 0) {
					me.__401020.style.visibility=(Number(me.__401020.style.opacity)>0||!me.__401020.style.opacity)?'inherit':'hidden';
					me.__401020.ggVisible=true;
				}
				else {
					me.__401020.style.visibility="hidden";
					me.__401020.ggVisible=false;
				}
			}
		}
		me.__401020.logicBlock_visible();
		me.__401020.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__401020.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__401020.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__401020.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401020.ggCurrentLogicStateAlpha == 0) {
					me.__401020.style.visibility=me.__401020.ggVisible?'inherit':'hidden';
					me.__401020.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__401020.style.opacity == 0.0) { me.__401020.style.visibility="hidden"; } }, 505);
					me.__401020.style.opacity=0;
				}
			}
		}
		me.__401020.logicBlock_alpha();
		me.__401020.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__401020);
		el=me.__401030=document.createElement('div');
		els=me.__401030__img=document.createElement('img');
		els.className='ggskin ggskin__401030';
		hs=basePath + 'images/_401030.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.3.0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401030.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401030.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__401030.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__401030.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__401030.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401030.ggCurrentLogicStateAngle == 0) {
					me.__401030.ggParameter.a = 359;
					me.__401030.style.transform=parameterToTransform(me.__401030.ggParameter);
				}
				else {
					me.__401030.ggParameter.a = 0;
					me.__401030.style.transform=parameterToTransform(me.__401030.ggParameter);
				}
			}
		}
		me.__401030.logicBlock_angle();
		me.__401030.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Inicio")) || 
				((player._(me.ggUserdata.title) == "Carpa Agrovet"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__401030.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__401030.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__401030.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401030.ggCurrentLogicStateVisible == 0) {
					me.__401030.style.visibility=(Number(me.__401030.style.opacity)>0||!me.__401030.style.opacity)?'inherit':'hidden';
					me.__401030.ggVisible=true;
				}
				else {
					me.__401030.style.visibility="hidden";
					me.__401030.ggVisible=false;
				}
			}
		}
		me.__401030.logicBlock_visible();
		me.__401030.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__401030.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__401030.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__401030.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401030.ggCurrentLogicStateAlpha == 0) {
					me.__401030.style.visibility=me.__401030.ggVisible?'inherit':'hidden';
					me.__401030.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__401030.style.opacity == 0.0) { me.__401030.style.visibility="hidden"; } }, 505);
					me.__401030.style.opacity=0;
				}
			}
		}
		me.__401030.logicBlock_alpha();
		me.__401030.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__401030);
		el=me.__40103=document.createElement('div');
		els=me.__40103__img=document.createElement('img');
		els.className='ggskin ggskin__40103';
		hs=basePath + 'images/_40103.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40103.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40103.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40103.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40103.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40103.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40103.ggCurrentLogicStateAngle == 0) {
					me.__40103.ggParameter.a = 359;
					me.__40103.style.transform=parameterToTransform(me.__40103.ggParameter);
				}
				else {
					me.__40103.ggParameter.a = 0;
					me.__40103.style.transform=parameterToTransform(me.__40103.ggParameter);
				}
			}
		}
		me.__40103.logicBlock_angle();
		me.__40103.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Inicio")) || 
				((player._(me.ggUserdata.title) == "Carpa Agrovet"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40103.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40103.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40103.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40103.ggCurrentLogicStateVisible == 0) {
					me.__40103.style.visibility=(Number(me.__40103.style.opacity)>0||!me.__40103.style.opacity)?'inherit':'hidden';
					me.__40103.ggVisible=true;
				}
				else {
					me.__40103.style.visibility="hidden";
					me.__40103.ggVisible=false;
				}
			}
		}
		me.__40103.logicBlock_visible();
		me.__40103.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40103.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40103.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40103.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40103.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__40103.style.opacity == 0.0) { me.__40103.style.visibility="hidden"; } }, 505);
					me.__40103.style.opacity=0;
				}
				else {
					me.__40103.style.visibility=me.__40103.ggVisible?'inherit':'hidden';
					me.__40103.style.opacity=1;
				}
			}
		}
		me.__40103.logicBlock_alpha();
		me.__40103.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__40103);
		el=me.__40104=document.createElement('div');
		els=me.__40104__img=document.createElement('img');
		els.className='ggskin ggskin__40104';
		hs=basePath + 'images/_40104.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40104.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40104.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40104.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40104.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40104.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40104.ggCurrentLogicStateAngle == 0) {
					me.__40104.ggParameter.a = 359;
					me.__40104.style.transform=parameterToTransform(me.__40104.ggParameter);
				}
				else {
					me.__40104.ggParameter.a = 0;
					me.__40104.style.transform=parameterToTransform(me.__40104.ggParameter);
				}
			}
		}
		me.__40104.logicBlock_angle();
		me.__40104.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Carpa Agricola"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40104.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40104.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40104.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40104.ggCurrentLogicStateVisible == 0) {
					me.__40104.style.visibility=(Number(me.__40104.style.opacity)>0||!me.__40104.style.opacity)?'inherit':'hidden';
					me.__40104.ggVisible=true;
				}
				else {
					me.__40104.style.visibility="hidden";
					me.__40104.ggVisible=false;
				}
			}
		}
		me.__40104.logicBlock_visible();
		me.__40104.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40104.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40104.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40104.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40104.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__40104.style.opacity == 0.0) { me.__40104.style.visibility="hidden"; } }, 505);
					me.__40104.style.opacity=0;
				}
				else {
					me.__40104.style.visibility=me.__40104.ggVisible?'inherit':'hidden';
					me.__40104.style.opacity=1;
				}
			}
		}
		me.__40104.logicBlock_alpha();
		me.__40104.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__40104);
		el=me.__401040=document.createElement('div');
		els=me.__401040__img=document.createElement('img');
		els.className='ggskin ggskin__401040';
		hs=basePath + 'images/_401040.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.4.0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401040.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401040.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__401040.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__401040.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__401040.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401040.ggCurrentLogicStateAngle == 0) {
					me.__401040.ggParameter.a = 359;
					me.__401040.style.transform=parameterToTransform(me.__401040.ggParameter);
				}
				else {
					me.__401040.ggParameter.a = 0;
					me.__401040.style.transform=parameterToTransform(me.__401040.ggParameter);
				}
			}
		}
		me.__401040.logicBlock_angle();
		me.__401040.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Carpa Agricola"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__401040.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__401040.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__401040.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401040.ggCurrentLogicStateVisible == 0) {
					me.__401040.style.visibility=(Number(me.__401040.style.opacity)>0||!me.__401040.style.opacity)?'inherit':'hidden';
					me.__401040.ggVisible=true;
				}
				else {
					me.__401040.style.visibility="hidden";
					me.__401040.ggVisible=false;
				}
			}
		}
		me.__401040.logicBlock_visible();
		me.__401040.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__401040.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__401040.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__401040.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401040.ggCurrentLogicStateAlpha == 0) {
					me.__401040.style.visibility=me.__401040.ggVisible?'inherit':'hidden';
					me.__401040.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__401040.style.opacity == 0.0) { me.__401040.style.visibility="hidden"; } }, 505);
					me.__401040.style.opacity=0;
				}
			}
		}
		me.__401040.logicBlock_alpha();
		me.__401040.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__401040);
		el=me.__40105=document.createElement('div');
		els=me.__40105__img=document.createElement('img');
		els.className='ggskin ggskin__40105';
		hs=basePath + 'images/_40105.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40105.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40105.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__40105.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__40105.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__40105.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40105.ggCurrentLogicStateAngle == 0) {
					me.__40105.ggParameter.a = 359;
					me.__40105.style.transform=parameterToTransform(me.__40105.ggParameter);
				}
				else {
					me.__40105.ggParameter.a = 0;
					me.__40105.style.transform=parameterToTransform(me.__40105.ggParameter);
				}
			}
		}
		me.__40105.logicBlock_angle();
		me.__40105.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Auto Posto 1")) || 
				((player._(me.ggUserdata.title) == "Auto Posto 2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__40105.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__40105.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__40105.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40105.ggCurrentLogicStateVisible == 0) {
					me.__40105.style.visibility=(Number(me.__40105.style.opacity)>0||!me.__40105.style.opacity)?'inherit':'hidden';
					me.__40105.ggVisible=true;
				}
				else {
					me.__40105.style.visibility="hidden";
					me.__40105.ggVisible=false;
				}
			}
		}
		me.__40105.logicBlock_visible();
		me.__40105.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__40105.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__40105.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__40105.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__40105.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__40105.style.opacity == 0.0) { me.__40105.style.visibility="hidden"; } }, 505);
					me.__40105.style.opacity=0;
				}
				else {
					me.__40105.style.visibility=me.__40105.ggVisible?'inherit':'hidden';
					me.__40105.style.opacity=1;
				}
			}
		}
		me.__40105.logicBlock_alpha();
		me.__40105.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__40105);
		el=me.__401050=document.createElement('div');
		els=me.__401050__img=document.createElement('img');
		els.className='ggskin ggskin__401050';
		hs=basePath + 'images/_401050.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="4.0.1.0.5.0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 15px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((27px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__401050.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__401050.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__401050.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__401050.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__401050.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401050.ggCurrentLogicStateAngle == 0) {
					me.__401050.ggParameter.a = 359;
					me.__401050.style.transform=parameterToTransform(me.__401050.ggParameter);
				}
				else {
					me.__401050.ggParameter.a = 0;
					me.__401050.style.transform=parameterToTransform(me.__401050.ggParameter);
				}
			}
		}
		me.__401050.logicBlock_angle();
		me.__401050.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "Auto Posto 1")) || 
				((player._(me.ggUserdata.title) == "Auto Posto 2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__401050.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__401050.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__401050.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401050.ggCurrentLogicStateVisible == 0) {
					me.__401050.style.visibility=(Number(me.__401050.style.opacity)>0||!me.__401050.style.opacity)?'inherit':'hidden';
					me.__401050.ggVisible=true;
				}
				else {
					me.__401050.style.visibility="hidden";
					me.__401050.ggVisible=false;
				}
			}
		}
		me.__401050.logicBlock_visible();
		me.__401050.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_4010_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__401050.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__401050.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__401050.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me.__401050.ggCurrentLogicStateAlpha == 0) {
					me.__401050.style.visibility=me.__401050.ggVisible?'inherit':'hidden';
					me.__401050.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__401050.style.opacity == 0.0) { me.__401050.style.visibility="hidden"; } }, 505);
					me.__401050.style.opacity=0;
				}
			}
		}
		me.__401050.logicBlock_alpha();
		me.__401050.ggUpdatePosition=function (useTransition) {
		}
		me.__4010_1.appendChild(me.__401050);
		me.__4010.appendChild(me.__4010_1);
		me.__div.appendChild(me.__4010);
		me.elementMouseOver['_4010']=false;
		me.__4011.logicBlock_position();
		me.__4011.logicBlock_alpha();
		me.__4010_1.logicBlock_backgroundcolor();
		me.elementMouseOver['_4010_1']=false;
		me.__40102.logicBlock_angle();
		me.__40102.logicBlock_visible();
		me.__40102.logicBlock_alpha();
		me.__401020.logicBlock_angle();
		me.__401020.logicBlock_visible();
		me.__401020.logicBlock_alpha();
		me.__401030.logicBlock_angle();
		me.__401030.logicBlock_visible();
		me.__401030.logicBlock_alpha();
		me.__40103.logicBlock_angle();
		me.__40103.logicBlock_visible();
		me.__40103.logicBlock_alpha();
		me.__40104.logicBlock_angle();
		me.__40104.logicBlock_visible();
		me.__40104.logicBlock_alpha();
		me.__401040.logicBlock_angle();
		me.__401040.logicBlock_visible();
		me.__401040.logicBlock_alpha();
		me.__40105.logicBlock_angle();
		me.__40105.logicBlock_visible();
		me.__40105.logicBlock_alpha();
		me.__401050.logicBlock_angle();
		me.__401050.logicBlock_visible();
		me.__401050.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me.__40102.logicBlock_visible();
				me.__401020.logicBlock_visible();
				me.__401030.logicBlock_visible();
				me.__40103.logicBlock_visible();
				me.__40104.logicBlock_visible();
				me.__401040.logicBlock_visible();
				me.__40105.logicBlock_visible();
				me.__401050.logicBlock_visible();
			};
			me.ggEvent_changenode=function(event) {
				me.__40102.logicBlock_visible();
				me.__401020.logicBlock_visible();
				me.__401030.logicBlock_visible();
				me.__40103.logicBlock_visible();
				me.__40104.logicBlock_visible();
				me.__401040.logicBlock_visible();
				me.__40105.logicBlock_visible();
				me.__401050.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me.__40102.logicBlock_visible();
				me.__401020.logicBlock_visible();
				me.__401030.logicBlock_visible();
				me.__40103.logicBlock_visible();
				me.__40104.logicBlock_visible();
				me.__401040.logicBlock_visible();
				me.__40105.logicBlock_visible();
				me.__401050.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_node_pin_carpaagricola(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_pin_carpaagricola=document.createElement('div');
		el.ggId="ht_node_pin_carpaagricola";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_pin_carpaagricola.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_pin_carpaagricola.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_pin_carpaagricola.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_pin_carpaagricola.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_pin_carpaagricola.style.transition='transform 0s';
				if (me._ht_node_pin_carpaagricola.ggCurrentLogicStateScaling == 0) {
					me._ht_node_pin_carpaagricola.ggParameter.sx = 0.65;
					me._ht_node_pin_carpaagricola.ggParameter.sy = 0.65;
					me._ht_node_pin_carpaagricola.style.transform=parameterToTransform(me._ht_node_pin_carpaagricola.ggParameter);
					skin.updateSize(me._ht_node_pin_carpaagricola);
				}
				else {
					me._ht_node_pin_carpaagricola.ggParameter.sx = 1;
					me._ht_node_pin_carpaagricola.ggParameter.sy = 1;
					me._ht_node_pin_carpaagricola.style.transform=parameterToTransform(me._ht_node_pin_carpaagricola.ggParameter);
					skin.updateSize(me._ht_node_pin_carpaagricola);
				}
			}
		}
		me._ht_node_pin_carpaagricola.logicBlock_scaling();
		me._ht_node_pin_carpaagricola.onclick=function (e) {
			player.openNext("{node6}",player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpaagricola.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpaagricola.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_pin_carpaagricola']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpaagricola.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_pin_carpaagricola']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpaagricola.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pin_carpaagricola=document.createElement('div');
		els=me._image_1_pin_carpaagricola__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pin_carpaagricola';
		hs=basePath + 'images/image_1_pin_carpaagricola.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pin_carpaagricola";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_pin_carpaagricola.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pin_carpaagricola.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_1_pin_carpaagricola.onmouseenter=function (e) {
			me.elementMouseOver['image_1_pin_carpaagricola']=true;
			me._text_1_pin_carpaagricola.logicBlock_scaling();
			me._text_1_pin_carpaagricola.logicBlock_alpha();
		}
		me._image_1_pin_carpaagricola.onmouseleave=function (e) {
			me.elementMouseOver['image_1_pin_carpaagricola']=false;
			me._text_1_pin_carpaagricola.logicBlock_scaling();
			me._text_1_pin_carpaagricola.logicBlock_alpha();
		}
		me._image_1_pin_carpaagricola.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_pin_carpaagricola=document.createElement('div');
		els=me._text_1_pin_carpaagricola__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_pin_carpaagricola";
		el.ggDx=0;
		el.ggDy=-74;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 74px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 14px 6px 14px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_pin_carpaagricola.ggUpdateText=function() {
			var params = [];
			var hs = player._("Carpa Agr\xedcola", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_pin_carpaagricola.ggUpdateText();
		el.appendChild(els);
		me._text_1_pin_carpaagricola.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_pin_carpaagricola.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['image_1_pin_carpaagricola'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1_pin_carpaagricola.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1_pin_carpaagricola.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1_pin_carpaagricola.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_carpaagricola.ggCurrentLogicStateScaling == 0) {
					me._text_1_pin_carpaagricola.ggParameter.sx = 1;
					me._text_1_pin_carpaagricola.ggParameter.sy = 1;
					me._text_1_pin_carpaagricola.style.transform=parameterToTransform(me._text_1_pin_carpaagricola.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_carpaagricola);}, 550);
				}
				else if (me._text_1_pin_carpaagricola.ggCurrentLogicStateScaling == 1) {
					me._text_1_pin_carpaagricola.ggParameter.sx = 1;
					me._text_1_pin_carpaagricola.ggParameter.sy = 1;
					me._text_1_pin_carpaagricola.style.transform=parameterToTransform(me._text_1_pin_carpaagricola.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_carpaagricola);}, 550);
				}
				else {
					me._text_1_pin_carpaagricola.ggParameter.sx = 0.8;
					me._text_1_pin_carpaagricola.ggParameter.sy = 0.8;
					me._text_1_pin_carpaagricola.style.transform=parameterToTransform(me._text_1_pin_carpaagricola.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_carpaagricola);}, 550);
				}
			}
		}
		me._text_1_pin_carpaagricola.logicBlock_scaling();
		me._text_1_pin_carpaagricola.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1_pin_carpaagricola'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1_pin_carpaagricola.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1_pin_carpaagricola.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1_pin_carpaagricola.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_carpaagricola.ggCurrentLogicStateAlpha == 0) {
					me._text_1_pin_carpaagricola.style.visibility=me._text_1_pin_carpaagricola.ggVisible?'inherit':'hidden';
					me._text_1_pin_carpaagricola.style.opacity=1;
				}
				else if (me._text_1_pin_carpaagricola.ggCurrentLogicStateAlpha == 1) {
					me._text_1_pin_carpaagricola.style.visibility=me._text_1_pin_carpaagricola.ggVisible?'inherit':'hidden';
					me._text_1_pin_carpaagricola.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_1_pin_carpaagricola.style.opacity == 0.0) { me._text_1_pin_carpaagricola.style.visibility="hidden"; } }, 505);
					me._text_1_pin_carpaagricola.style.opacity=0;
				}
			}
		}
		me._text_1_pin_carpaagricola.logicBlock_alpha();
		me._text_1_pin_carpaagricola.ggUpdatePosition=function (useTransition) {
		}
		me._image_1_pin_carpaagricola.appendChild(me._text_1_pin_carpaagricola);
		me._ht_node_pin_carpaagricola.appendChild(me._image_1_pin_carpaagricola);
		me._ht_node_pin_carpaagricola.logicBlock_scaling();
		me.elementMouseOver['ht_node_pin_carpaagricola']=false;
		me.elementMouseOver['image_1_pin_carpaagricola']=false;
		me._text_1_pin_carpaagricola.logicBlock_scaling();
		me._text_1_pin_carpaagricola.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_node_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._text_1_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_alpha();
			};
			me.ggEvent_varchanged_var_respphone=function() {
				me._ht_node_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_scaling();
				me._text_1_pin_carpaagricola.logicBlock_alpha();
			};
			me.__div = me._ht_node_pin_carpaagricola;
	};
	function SkinHotspotClass_ht_node_pin_veterinaria(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_pin_veterinaria=document.createElement('div');
		el.ggId="ht_node_pin_veterinaria";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_pin_veterinaria.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_pin_veterinaria.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_pin_veterinaria.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_pin_veterinaria.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_pin_veterinaria.style.transition='transform 0s';
				if (me._ht_node_pin_veterinaria.ggCurrentLogicStateScaling == 0) {
					me._ht_node_pin_veterinaria.ggParameter.sx = 0.65;
					me._ht_node_pin_veterinaria.ggParameter.sy = 0.65;
					me._ht_node_pin_veterinaria.style.transform=parameterToTransform(me._ht_node_pin_veterinaria.ggParameter);
					skin.updateSize(me._ht_node_pin_veterinaria);
				}
				else {
					me._ht_node_pin_veterinaria.ggParameter.sx = 1;
					me._ht_node_pin_veterinaria.ggParameter.sy = 1;
					me._ht_node_pin_veterinaria.style.transform=parameterToTransform(me._ht_node_pin_veterinaria.ggParameter);
					skin.updateSize(me._ht_node_pin_veterinaria);
				}
			}
		}
		me._ht_node_pin_veterinaria.logicBlock_scaling();
		me._ht_node_pin_veterinaria.onclick=function (e) {
			player.openNext("{node34}","");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_veterinaria.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_veterinaria.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_pin_veterinaria']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_veterinaria.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_pin_veterinaria']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_veterinaria.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pin_veterinaria=document.createElement('div');
		els=me._image_1_pin_veterinaria__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pin_veterinaria';
		hs=basePath + 'images/image_1_pin_veterinaria.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pin_veterinaria";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_pin_veterinaria.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pin_veterinaria.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_1_pin_veterinaria.onmouseenter=function (e) {
			me.elementMouseOver['image_1_pin_veterinaria']=true;
			me._text_1_pin_veterinaria.logicBlock_scaling();
			me._text_1_pin_veterinaria.logicBlock_alpha();
		}
		me._image_1_pin_veterinaria.onmouseleave=function (e) {
			me.elementMouseOver['image_1_pin_veterinaria']=false;
			me._text_1_pin_veterinaria.logicBlock_scaling();
			me._text_1_pin_veterinaria.logicBlock_alpha();
		}
		me._image_1_pin_veterinaria.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_pin_veterinaria=document.createElement('div');
		els=me._text_1_pin_veterinaria__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_pin_veterinaria";
		el.ggDx=0;
		el.ggDy=-74;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 74px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 14px 6px 14px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_pin_veterinaria.ggUpdateText=function() {
			var params = [];
			var hs = player._("Clinica Veterin\xe1ria", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_pin_veterinaria.ggUpdateText();
		el.appendChild(els);
		me._text_1_pin_veterinaria.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_pin_veterinaria.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['image_1_pin_veterinaria'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1_pin_veterinaria.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1_pin_veterinaria.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1_pin_veterinaria.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_veterinaria.ggCurrentLogicStateScaling == 0) {
					me._text_1_pin_veterinaria.ggParameter.sx = 1;
					me._text_1_pin_veterinaria.ggParameter.sy = 1;
					me._text_1_pin_veterinaria.style.transform=parameterToTransform(me._text_1_pin_veterinaria.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_veterinaria);}, 550);
				}
				else if (me._text_1_pin_veterinaria.ggCurrentLogicStateScaling == 1) {
					me._text_1_pin_veterinaria.ggParameter.sx = 1;
					me._text_1_pin_veterinaria.ggParameter.sy = 1;
					me._text_1_pin_veterinaria.style.transform=parameterToTransform(me._text_1_pin_veterinaria.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_veterinaria);}, 550);
				}
				else {
					me._text_1_pin_veterinaria.ggParameter.sx = 0.8;
					me._text_1_pin_veterinaria.ggParameter.sy = 0.8;
					me._text_1_pin_veterinaria.style.transform=parameterToTransform(me._text_1_pin_veterinaria.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_veterinaria);}, 550);
				}
			}
		}
		me._text_1_pin_veterinaria.logicBlock_scaling();
		me._text_1_pin_veterinaria.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1_pin_veterinaria'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1_pin_veterinaria.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1_pin_veterinaria.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1_pin_veterinaria.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_veterinaria.ggCurrentLogicStateAlpha == 0) {
					me._text_1_pin_veterinaria.style.visibility=me._text_1_pin_veterinaria.ggVisible?'inherit':'hidden';
					me._text_1_pin_veterinaria.style.opacity=1;
				}
				else if (me._text_1_pin_veterinaria.ggCurrentLogicStateAlpha == 1) {
					me._text_1_pin_veterinaria.style.visibility=me._text_1_pin_veterinaria.ggVisible?'inherit':'hidden';
					me._text_1_pin_veterinaria.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_1_pin_veterinaria.style.opacity == 0.0) { me._text_1_pin_veterinaria.style.visibility="hidden"; } }, 505);
					me._text_1_pin_veterinaria.style.opacity=0;
				}
			}
		}
		me._text_1_pin_veterinaria.logicBlock_alpha();
		me._text_1_pin_veterinaria.ggUpdatePosition=function (useTransition) {
		}
		me._image_1_pin_veterinaria.appendChild(me._text_1_pin_veterinaria);
		me._ht_node_pin_veterinaria.appendChild(me._image_1_pin_veterinaria);
		me._ht_node_pin_veterinaria.logicBlock_scaling();
		me.elementMouseOver['ht_node_pin_veterinaria']=false;
		me.elementMouseOver['image_1_pin_veterinaria']=false;
		me._text_1_pin_veterinaria.logicBlock_scaling();
		me._text_1_pin_veterinaria.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_node_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._text_1_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_alpha();
			};
			me.ggEvent_varchanged_var_respphone=function() {
				me._ht_node_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_scaling();
				me._text_1_pin_veterinaria.logicBlock_alpha();
			};
			me.__div = me._ht_node_pin_veterinaria;
	};
	function SkinHotspotClass_ht_node_pin_posto2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_pin_posto2=document.createElement('div');
		el.ggId="ht_node_pin_posto2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_pin_posto2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_pin_posto2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_pin_posto2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_pin_posto2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_pin_posto2.style.transition='transform 0s';
				if (me._ht_node_pin_posto2.ggCurrentLogicStateScaling == 0) {
					me._ht_node_pin_posto2.ggParameter.sx = 0.65;
					me._ht_node_pin_posto2.ggParameter.sy = 0.65;
					me._ht_node_pin_posto2.style.transform=parameterToTransform(me._ht_node_pin_posto2.ggParameter);
					skin.updateSize(me._ht_node_pin_posto2);
				}
				else {
					me._ht_node_pin_posto2.ggParameter.sx = 1;
					me._ht_node_pin_posto2.ggParameter.sy = 1;
					me._ht_node_pin_posto2.style.transform=parameterToTransform(me._ht_node_pin_posto2.ggParameter);
					skin.updateSize(me._ht_node_pin_posto2);
				}
			}
		}
		me._ht_node_pin_posto2.logicBlock_scaling();
		me._ht_node_pin_posto2.onclick=function (e) {
			player.openNext("{node5}","");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto2.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto2.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_pin_posto2']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto2.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_pin_posto2']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pin_posto2=document.createElement('div');
		els=me._image_1_pin_posto2__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pin_posto2';
		hs=basePath + 'images/image_1_pin_posto2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pin_posto2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_pin_posto2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pin_posto2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_1_pin_posto2.onmouseenter=function (e) {
			me.elementMouseOver['image_1_pin_posto2']=true;
			me._text_1_pin_posto2.logicBlock_scaling();
			me._text_1_pin_posto2.logicBlock_alpha();
		}
		me._image_1_pin_posto2.onmouseleave=function (e) {
			me.elementMouseOver['image_1_pin_posto2']=false;
			me._text_1_pin_posto2.logicBlock_scaling();
			me._text_1_pin_posto2.logicBlock_alpha();
		}
		me._image_1_pin_posto2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_pin_posto2=document.createElement('div');
		els=me._text_1_pin_posto2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_pin_posto2";
		el.ggDx=0;
		el.ggDy=-74;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 74px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 14px 6px 14px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_pin_posto2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Posto 2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_pin_posto2.ggUpdateText();
		el.appendChild(els);
		me._text_1_pin_posto2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_pin_posto2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['image_1_pin_posto2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1_pin_posto2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1_pin_posto2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1_pin_posto2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_posto2.ggCurrentLogicStateScaling == 0) {
					me._text_1_pin_posto2.ggParameter.sx = 1;
					me._text_1_pin_posto2.ggParameter.sy = 1;
					me._text_1_pin_posto2.style.transform=parameterToTransform(me._text_1_pin_posto2.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_posto2);}, 550);
				}
				else if (me._text_1_pin_posto2.ggCurrentLogicStateScaling == 1) {
					me._text_1_pin_posto2.ggParameter.sx = 1;
					me._text_1_pin_posto2.ggParameter.sy = 1;
					me._text_1_pin_posto2.style.transform=parameterToTransform(me._text_1_pin_posto2.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_posto2);}, 550);
				}
				else {
					me._text_1_pin_posto2.ggParameter.sx = 0.8;
					me._text_1_pin_posto2.ggParameter.sy = 0.8;
					me._text_1_pin_posto2.style.transform=parameterToTransform(me._text_1_pin_posto2.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_posto2);}, 550);
				}
			}
		}
		me._text_1_pin_posto2.logicBlock_scaling();
		me._text_1_pin_posto2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1_pin_posto2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1_pin_posto2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1_pin_posto2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1_pin_posto2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_posto2.ggCurrentLogicStateAlpha == 0) {
					me._text_1_pin_posto2.style.visibility=me._text_1_pin_posto2.ggVisible?'inherit':'hidden';
					me._text_1_pin_posto2.style.opacity=1;
				}
				else if (me._text_1_pin_posto2.ggCurrentLogicStateAlpha == 1) {
					me._text_1_pin_posto2.style.visibility=me._text_1_pin_posto2.ggVisible?'inherit':'hidden';
					me._text_1_pin_posto2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_1_pin_posto2.style.opacity == 0.0) { me._text_1_pin_posto2.style.visibility="hidden"; } }, 505);
					me._text_1_pin_posto2.style.opacity=0;
				}
			}
		}
		me._text_1_pin_posto2.logicBlock_alpha();
		me._text_1_pin_posto2.ggUpdatePosition=function (useTransition) {
		}
		me._image_1_pin_posto2.appendChild(me._text_1_pin_posto2);
		me._ht_node_pin_posto2.appendChild(me._image_1_pin_posto2);
		me._ht_node_pin_posto2.logicBlock_scaling();
		me.elementMouseOver['ht_node_pin_posto2']=false;
		me.elementMouseOver['image_1_pin_posto2']=false;
		me._text_1_pin_posto2.logicBlock_scaling();
		me._text_1_pin_posto2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_node_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._text_1_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_alpha();
			};
			me.ggEvent_varchanged_var_respphone=function() {
				me._ht_node_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_scaling();
				me._text_1_pin_posto2.logicBlock_alpha();
			};
			me.__div = me._ht_node_pin_posto2;
	};
	function SkinHotspotClass_ht_node_pin_posto1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_pin_posto1=document.createElement('div');
		el.ggId="ht_node_pin_posto1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_pin_posto1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_pin_posto1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_pin_posto1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_pin_posto1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_pin_posto1.style.transition='transform 0s';
				if (me._ht_node_pin_posto1.ggCurrentLogicStateScaling == 0) {
					me._ht_node_pin_posto1.ggParameter.sx = 0.65;
					me._ht_node_pin_posto1.ggParameter.sy = 0.65;
					me._ht_node_pin_posto1.style.transform=parameterToTransform(me._ht_node_pin_posto1.ggParameter);
					skin.updateSize(me._ht_node_pin_posto1);
				}
				else {
					me._ht_node_pin_posto1.ggParameter.sx = 1;
					me._ht_node_pin_posto1.ggParameter.sy = 1;
					me._ht_node_pin_posto1.style.transform=parameterToTransform(me._ht_node_pin_posto1.ggParameter);
					skin.updateSize(me._ht_node_pin_posto1);
				}
			}
		}
		me._ht_node_pin_posto1.logicBlock_scaling();
		me._ht_node_pin_posto1.onclick=function (e) {
			player.openNext("{node1}","");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_pin_posto1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto1.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_pin_posto1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_posto1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pin_posto1=document.createElement('div');
		els=me._image_1_pin_posto1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pin_posto1';
		hs=basePath + 'images/image_1_pin_posto1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pin_posto1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_pin_posto1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pin_posto1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_1_pin_posto1.onmouseenter=function (e) {
			me.elementMouseOver['image_1_pin_posto1']=true;
			me._text_1_pin_posto1.logicBlock_alpha();
			me._text_1_pin_posto1.logicBlock_scaling();
		}
		me._image_1_pin_posto1.onmouseleave=function (e) {
			me.elementMouseOver['image_1_pin_posto1']=false;
			me._text_1_pin_posto1.logicBlock_alpha();
			me._text_1_pin_posto1.logicBlock_scaling();
		}
		me._image_1_pin_posto1.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_pin_posto1=document.createElement('div');
		els=me._text_1_pin_posto1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_pin_posto1";
		el.ggDx=0;
		el.ggDy=-74;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 74px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 14px 6px 14px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_pin_posto1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Posto 1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_pin_posto1.ggUpdateText();
		el.appendChild(els);
		me._text_1_pin_posto1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_pin_posto1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['image_1_pin_posto1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1_pin_posto1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1_pin_posto1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1_pin_posto1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_posto1.ggCurrentLogicStateScaling == 0) {
					me._text_1_pin_posto1.ggParameter.sx = 1;
					me._text_1_pin_posto1.ggParameter.sy = 1;
					me._text_1_pin_posto1.style.transform=parameterToTransform(me._text_1_pin_posto1.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_posto1);}, 550);
				}
				else if (me._text_1_pin_posto1.ggCurrentLogicStateScaling == 1) {
					me._text_1_pin_posto1.ggParameter.sx = 1;
					me._text_1_pin_posto1.ggParameter.sy = 1;
					me._text_1_pin_posto1.style.transform=parameterToTransform(me._text_1_pin_posto1.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_posto1);}, 550);
				}
				else {
					me._text_1_pin_posto1.ggParameter.sx = 0.8;
					me._text_1_pin_posto1.ggParameter.sy = 0.8;
					me._text_1_pin_posto1.style.transform=parameterToTransform(me._text_1_pin_posto1.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_posto1);}, 550);
				}
			}
		}
		me._text_1_pin_posto1.logicBlock_scaling();
		me._text_1_pin_posto1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1_pin_posto1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1_pin_posto1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1_pin_posto1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1_pin_posto1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_posto1.ggCurrentLogicStateAlpha == 0) {
					me._text_1_pin_posto1.style.visibility=me._text_1_pin_posto1.ggVisible?'inherit':'hidden';
					me._text_1_pin_posto1.style.opacity=1;
				}
				else if (me._text_1_pin_posto1.ggCurrentLogicStateAlpha == 1) {
					me._text_1_pin_posto1.style.visibility=me._text_1_pin_posto1.ggVisible?'inherit':'hidden';
					me._text_1_pin_posto1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_1_pin_posto1.style.opacity == 0.0) { me._text_1_pin_posto1.style.visibility="hidden"; } }, 505);
					me._text_1_pin_posto1.style.opacity=0;
				}
			}
		}
		me._text_1_pin_posto1.logicBlock_alpha();
		me._text_1_pin_posto1.ggUpdatePosition=function (useTransition) {
		}
		me._image_1_pin_posto1.appendChild(me._text_1_pin_posto1);
		me._ht_node_pin_posto1.appendChild(me._image_1_pin_posto1);
		me._ht_node_pin_posto1.logicBlock_scaling();
		me.elementMouseOver['ht_node_pin_posto1']=false;
		me.elementMouseOver['image_1_pin_posto1']=false;
		me._text_1_pin_posto1.logicBlock_scaling();
		me._text_1_pin_posto1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_node_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._text_1_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_var_respphone=function() {
				me._ht_node_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_scaling();
				me._text_1_pin_posto1.logicBlock_alpha();
			};
			me.__div = me._ht_node_pin_posto1;
	};
	function SkinHotspotClass_ht_node_pin_carpa(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_pin_carpa=document.createElement('div');
		el.ggId="ht_node_pin_carpa";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_pin_carpa.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_pin_carpa.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_pin_carpa.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_pin_carpa.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_pin_carpa.style.transition='transform 0s';
				if (me._ht_node_pin_carpa.ggCurrentLogicStateScaling == 0) {
					me._ht_node_pin_carpa.ggParameter.sx = 0.65;
					me._ht_node_pin_carpa.ggParameter.sy = 0.65;
					me._ht_node_pin_carpa.style.transform=parameterToTransform(me._ht_node_pin_carpa.ggParameter);
					skin.updateSize(me._ht_node_pin_carpa);
				}
				else {
					me._ht_node_pin_carpa.ggParameter.sx = 1;
					me._ht_node_pin_carpa.ggParameter.sy = 1;
					me._ht_node_pin_carpa.style.transform=parameterToTransform(me._ht_node_pin_carpa.ggParameter);
					skin.updateSize(me._ht_node_pin_carpa);
				}
			}
		}
		me._ht_node_pin_carpa.logicBlock_scaling();
		me._ht_node_pin_carpa.onclick=function (e) {
			player.openNext("{node2}","");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpa.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpa.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_pin_carpa']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpa.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_pin_carpa']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_pin_carpa.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pin_carpa=document.createElement('div');
		els=me._image_1_pin_carpa__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pin_carpa';
		hs=basePath + 'images/image_1_pin_carpa.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pin_carpa";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_pin_carpa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pin_carpa.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._image_1_pin_carpa.onmouseenter=function (e) {
			me.elementMouseOver['image_1_pin_carpa']=true;
			me._text_1_pin_carpa.logicBlock_alpha();
			me._text_1_pin_carpa.logicBlock_scaling();
		}
		me._image_1_pin_carpa.onmouseleave=function (e) {
			me.elementMouseOver['image_1_pin_carpa']=false;
			me._text_1_pin_carpa.logicBlock_alpha();
			me._text_1_pin_carpa.logicBlock_scaling();
		}
		me._image_1_pin_carpa.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1_pin_carpa=document.createElement('div');
		els=me._text_1_pin_carpa__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_pin_carpa";
		el.ggDx=0;
		el.ggDy=-74;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text fonte_medium";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 74px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #428c5c;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 14px 6px 14px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_pin_carpa.ggUpdateText=function() {
			var params = [];
			var hs = player._("Carpa Agrovet", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_pin_carpa.ggUpdateText();
		el.appendChild(els);
		me._text_1_pin_carpa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_pin_carpa.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['image_1_pin_carpa'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1_pin_carpa.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1_pin_carpa.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1_pin_carpa.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_carpa.ggCurrentLogicStateScaling == 0) {
					me._text_1_pin_carpa.ggParameter.sx = 1;
					me._text_1_pin_carpa.ggParameter.sy = 1;
					me._text_1_pin_carpa.style.transform=parameterToTransform(me._text_1_pin_carpa.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_carpa);}, 550);
				}
				else if (me._text_1_pin_carpa.ggCurrentLogicStateScaling == 1) {
					me._text_1_pin_carpa.ggParameter.sx = 1;
					me._text_1_pin_carpa.ggParameter.sy = 1;
					me._text_1_pin_carpa.style.transform=parameterToTransform(me._text_1_pin_carpa.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_carpa);}, 550);
				}
				else {
					me._text_1_pin_carpa.ggParameter.sx = 0.8;
					me._text_1_pin_carpa.ggParameter.sy = 0.8;
					me._text_1_pin_carpa.style.transform=parameterToTransform(me._text_1_pin_carpa.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1_pin_carpa);}, 550);
				}
			}
		}
		me._text_1_pin_carpa.logicBlock_scaling();
		me._text_1_pin_carpa.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_1_pin_carpa'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('var_respphone') == true)) && 
				((me.hotspot.closestToCenter == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1_pin_carpa.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1_pin_carpa.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1_pin_carpa.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_1_pin_carpa.ggCurrentLogicStateAlpha == 0) {
					me._text_1_pin_carpa.style.visibility=me._text_1_pin_carpa.ggVisible?'inherit':'hidden';
					me._text_1_pin_carpa.style.opacity=1;
				}
				else if (me._text_1_pin_carpa.ggCurrentLogicStateAlpha == 1) {
					me._text_1_pin_carpa.style.visibility=me._text_1_pin_carpa.ggVisible?'inherit':'hidden';
					me._text_1_pin_carpa.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_1_pin_carpa.style.opacity == 0.0) { me._text_1_pin_carpa.style.visibility="hidden"; } }, 505);
					me._text_1_pin_carpa.style.opacity=0;
				}
			}
		}
		me._text_1_pin_carpa.logicBlock_alpha();
		me._text_1_pin_carpa.ggUpdatePosition=function (useTransition) {
		}
		me._image_1_pin_carpa.appendChild(me._text_1_pin_carpa);
		me._ht_node_pin_carpa.appendChild(me._image_1_pin_carpa);
		me._ht_node_pin_carpa.logicBlock_scaling();
		me.elementMouseOver['ht_node_pin_carpa']=false;
		me.elementMouseOver['image_1_pin_carpa']=false;
		me._text_1_pin_carpa.logicBlock_scaling();
		me._text_1_pin_carpa.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_node_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_alpha();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._text_1_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_alpha();
			};
			me.ggEvent_varchanged_var_respphone=function() {
				me._ht_node_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_scaling();
				me._text_1_pin_carpa.logicBlock_alpha();
			};
			me.__div = me._ht_node_pin_carpa;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_respphone') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node.style.transition='transform 0s';
				if (me._ht_node.ggCurrentLogicStateScaling == 0) {
					me._ht_node.ggParameter.sx = 0.7;
					me._ht_node.ggParameter.sy = 0.7;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
				else {
					me._ht_node.ggParameter.sx = 1;
					me._ht_node.ggParameter.sy = 1;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
			}
		}
		me._ht_node.logicBlock_scaling();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_1=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_1.json',
			autoplay: true,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="Lottie 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._lottie_1);
		me._ht_node.logicBlock_scaling();
		me.elementMouseOver['ht_node']=false;
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_scaling();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_scaling();
			};
			me.ggEvent_varchanged_var_respphone=function() {
				me._ht_node.logicBlock_scaling();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_pin_carpa') {
				hotspot.skinid = 'ht_node_pin_carpa';
				hsinst = new SkinHotspotClass_ht_node_pin_carpa(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_pin_posto1') {
				hotspot.skinid = 'ht_node_pin_posto1';
				hsinst = new SkinHotspotClass_ht_node_pin_posto1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_pin_posto2') {
				hotspot.skinid = 'ht_node_pin_posto2';
				hsinst = new SkinHotspotClass_ht_node_pin_posto2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_pin_veterinaria') {
				hotspot.skinid = 'ht_node_pin_veterinaria';
				hsinst = new SkinHotspotClass_ht_node_pin_veterinaria(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node_pin_carpaagricola';
				hsinst = new SkinHotspotClass_ht_node_pin_carpaagricola(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timeranimation.ggUpdateConditionTimer();
		if (me._timeranimation.ggLastIsActive!=me._timeranimation.ggIsActive()) {
			me._timeranimation.ggLastIsActive=me._timeranimation.ggIsActive();
			if (me._timeranimation.ggLastIsActive) {
			} else {
				if (
					(
						((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
					)
				) {
					me._loading.style.transition='none';
					me._loading.style.visibility='hidden';
					me._loading.ggVisible=false;
				}
				if (
					(
						((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
					)
				) {
					me._img_mobile_2.style.transition='none';
					me._img_mobile_2.style.visibility='hidden';
					me._img_mobile_2.ggVisible=false;
				}
				if (
					(
						((player.nodeVisited(me._timeranimation.ggElementNodeId()) == false))
					)
				) {
					if (player.transitionsDisabled) {
						me._ativar_musica.style.transition='none';
					} else {
						me._ativar_musica.style.transition='all 2000ms ease 0ms';
					}
					me._ativar_musica.style.opacity='1';
					me._ativar_musica.style.visibility=me._ativar_musica.ggVisible?'inherit':'hidden';
				}
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-display: swap; font-family: "roboto-regular"; font-style: normal; font-weight: 400; src: url("$(skinbase)fonts/roboto-v32-latin-regular.woff2") format("woff2"), url("$(skinbase)fonts/roboto-v32-latin-regular.ttf") format("truetype"); } @font-face { font-display: swap; font-family: "roboto-500"; font-style: normal; font-weight: 500; src: url("$(skinbase)fonts/roboto-v32-latin-500.woff2") format("woff2"), url("$(skinbase)fonts/roboto-v32-latin-500.ttf") format("truetype"); } @font-face { font-display: swap; font-family: "roboto-700"; font-style: normal; font-weight: 700; src: url("$(skinbase)fonts/roboto-v32-latin-700.woff2") format("woff2"), url("$(skinbase)fonts/roboto-v32-latin-700.ttf") format("truetype"); } .fonte_medium { font-family: "roboto-500"; } .fonte_bold { font-family: "roboto-700"; } .fonte_regular { font-family: "roboto-regular"; } .pulse { animation: pulse-animation 3s infinite; } @keyframes pulse-animation { 0% { box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.7); } 100% { box-shadow: 0 0 0 30px rgba(255, 255, 255, 0); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};