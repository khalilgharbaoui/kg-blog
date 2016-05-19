//= require jquery/dist/jquery.min
//= require imagesloaded/imagesloaded.pkgd.min
//= require packery/dist/packery.pkgd.min

/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){function d(){a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||f.toggleClass("open"),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var c=a(this),d=c.data("target")||c.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f,g,h,i;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,g=this.options.trigger.split(" ");for(i=g.length;i--;)h=g[i],h=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):h!="manual"&&(e=h=="hover"?"mouseenter":"focus",f=h=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this)));this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a.fn[this.type].defaults,d={},e;this._options&&a.each(this._options,function(a,b){c[a]!=b&&(d[a]=b)},this),e=a(b.currentTarget)[this.type](d).data(this.type);if(!e.options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){e.hoverState=="in"&&e.show()},e.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var b,c,d,e,f,g,h=a.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(h);if(h.isDefaultPrevented())return;b=this.tip(),this.setContent(),this.options.animation&&b.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,b.detach().css({top:0,left:0,display:"block"}),this.options.container?b.appendTo(this.options.container):b.insertAfter(this.$element),c=this.getPosition(),d=b[0].offsetWidth,e=b[0].offsetHeight;switch(f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}this.applyPlacement(g,f),this.$element.trigger("shown")}},applyPlacement:function(a,b){var c=this.tip(),d=c[0].offsetWidth,e=c[0].offsetHeight,f,g,h,i;c.offset(a).addClass(b).addClass("in"),f=c[0].offsetWidth,g=c[0].offsetHeight,b=="top"&&g!=e&&(a.top=a.top+e-g,i=!0),b=="bottom"||b=="top"?(h=0,a.left<0&&(h=a.left*-2,a.left=0,c.offset(a),f=c[0].offsetWidth,g=c[0].offsetHeight),this.replaceArrow(h-d+f,f,"left")):this.replaceArrow(g-e,g,"top"),i&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function e(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip(),d=a.Event("hide");this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e():c.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=b?a(b.currentTarget)[this.type](this._options).data(this.type):this;c.tip().hasClass("in")?c.hide():c.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=(typeof c.content=="function"?c.content.call(b[0]):c.content)||b.attr("data-content"),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning||this.$element.hasClass("in"))return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning||!this.$element.hasClass("in"))return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),typeof c=="object"&&c);e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.typeahead;a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;c.typeahead(c.data())})}(window.jQuery)

/** HeatMap Tracking */

/**
 * Tracker, to be included on the pages where user movement must be monitored.
 * Part of userTrack system.
 */

'use strict';

var UST = {
    DEBUG: false,
    settings: {
        isStatic: true,
        recordClick: true,
        recordMove: true,
        recordKeyboard: true,
        delay: 200,
        maxMoves: 800,
        serverPath: "//heatmaps.webtotally.com",
        percentangeRecorded: 100,
        ignoreGET: ['utm_source', 'utm_ccc_01', 'gclid', 'utm_campaign', 'utm_medium'],
    }
};

UST.randomToken = function() {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
};

UST.enableRecord = function() {
    localStorage.noRecord = 'false';
};

UST.disableRecord = function() {
    localStorage.noRecord = 'true';
};

UST.canRecord = function() {
    // If is mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false;
    }

    // If it is in iframe, don't record
    if (top !== self) {
        return false;
    }

    // If we don't want to be recorded
    if (localStorage.noRecord === 'true') {
        return false;
    }

    // If we only have to record a percentage of visitors
    // If the visitor was not already being recorded
    if (localStorage.getItem('token') === null) {
        if (Math.random() * 100 >= UST.settings.percentangeRecorded) {
            UST.disableRecord();
            return false;
        }
    }

    return true;
};

UST.testRequirements = function() {
    // Test that jQuery exists
    if (typeof jQuery === 'undefined')
        return "Did you include jQuery before tracker.js?";

    // Test that jQuery version is new enough
    // Don't break the script, just display an warning

    var versions = jQuery.fn.jquery.split('.');
    var oldEnough = versions[0] > 1 || (versions[1] >= 8 && versions[2] >= 1);
    if (!oldEnough)
        console.log("Your jQuery version seems to be old. userTrack requires at least jQuery 1.8.1");

    return 'ok';
};

/**
 * Helper function to find the main content area.
 * @return {jQuery} - The jQuery Object of the div that probably contains the content.
 */
UST.getContentDiv = function() {

    var mostProbable = jQuery('body');
    var maxP = 0;
    var documentWidth = jQuery(document).width();
    var documentHeight = jQuery(document).height();

    jQuery('div').each(function() {

        var probability = 0;
        var t = jQuery(this);

        if (t.css('position') == 'static' || t.css('position') == 'relative')
            probability += 2;

        if (t.height() > documentHeight / 2)
            probability += 3;

        if (t.parent().is('body'))
            probability++;

        if (t.css('marginLeft') == t.css('marginRight'))
            probability++;

        if (t.attr('id') == 'content')
            probability += 2;

        if (t.attr('id') == 'container')
            probability++;

        if (t.width() != documentWidth)
            probability += 2;

        if (probability > maxP) {
            maxP = probability;
            mostProbable = t;
        }

    });

    return mostProbable;
};

// Get root url to website/ to server
UST.getContextPath = function() {
    if (UST.settings.serverPath !== '') {
        return UST.settings.serverPath + '/';
    }

    return '/';
};

// Get domain name, without www.
UST.getDomain = function() {
    // Always remove www. from the begining
    if (document.domain.indexOf('www.') === 0) {
        return document.domain.substr(4);
    }

    return document.domain;
};

UST.removeURLParam = function(key, url) {
    var rtn = url.split("?")[0],
        param,
        params_arr = [],
        queryString = (url.indexOf("?") !== -1) ? url.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
};

// Get the current URL and remove unwanted GET params
UST.getCleanPageURL = function() {
    var currentURL = window.location.pathname + window.location.search;

    // Only compute again if different from last URL
    if (UST.lastURL != currentURL) {
        UST.lastURL = currentURL;

        UST.cleanPageURL = currentURL;
        for (var key in UST.settings.ignoreGET) {
            var param = UST.settings.ignoreGET[key];
            UST.cleanPageURL = UST.removeURLParam(param, UST.cleanPageURL);

            if (UST.cleanPageURL[UST.cleanPageURL.length - 1] == '?') {
                UST.cleanPageURL = UST.cleanPageURL.slice(0, -1);
            }
        }
    }

    return UST.cleanPageURL;
};

// Functions to store/load numbers as 4 digit numbers
UST.coord4 = {
    // Auxiliary function to prepend '0' to get a 4 digit number
    fillZeros: function(x) {
        x = x.toString();

        while (x.length < 4) {
            x = '0' + x;
        }

        return x;
    },

    // Auxiliary function to get a point from a string, space separated resolution
    get2DPoint: function(x) {

        x = x.toString();

        var p = {
            x: x.substring(0, 4),
            y: x.substring(4)
        };

        // Remove prepending 0s
        while (p.x[0] === '0') {
            p.x = p.x.substring(1);
        }

        while (p.y[0] === '0') {
            p.y = p.y.substring(1);
        }

        return p;
    }
};

UST.init = function() {

    UST.DEBUG && console.log(localStorage);

    // Make sure all client-side requirements for userTrack are fulfilled
    var errorStarting = UST.testRequirements();
    if (errorStarting !== 'ok') {
        console.log('userTrack tracker could not be started.', errorStarting)
        return;
    }

    if (!UST.canRecord()) {
        return;
    }

    // Aliases
    var getContextPath = UST.getContextPath;
    var getDomain = UST.getDomain;

    UST.sendData = function(clientPageID) {

        // Update the date of the client to keep the session active
        localStorage.setItem('lastTokenDate', new Date());

        // Send all data at once, fewer requests
        var data = {
            movements: '',
            clicks: '',
            partial: ''
        };

        /**
         * Add movements to data
         */
        var toSend = [];
        for (var v in movements) {
            var obj = UST.coord4.get2DPoint(v);
            obj.count = movements[v];
            toSend.push(obj);
        }

        if (toSend.length > 3) {
            data.movements = JSON.stringify(toSend);
            // Clear old movements
            movements = {};
        }

        /**
         * Add clicks to data
         */
        toSend = [];
        for (v in clicks) {
            var obj = UST.coord4.get2DPoint(v);
            obj.count = clicks[v];
            toSend.push(obj);
        }

        if (toSend.length > 0) {
            data.clicks = JSON.stringify(toSend);
            // Clear old clicks
            clicks = {};
        }


        /**
         * Add partial to data
         */
        var cachedRecords = localStorage.getItem('record');

        if (cachedRecords !== null && cachedRecords !== undefined) {
            if (cachedRecords.length > 30) {
                data.partial = cachedRecords;
            }
        }

        /**
         * Send the data
         */
        jQuery.ajax({
            type: "POST",
            crossDomain: UST.settings.serverPath !== '',
            data: {
                movements: data.movements,
                clicks: data.clicks,
                partial: data.partial,
                what: 'data',
                clientPageID: clientPageID
            },
            url: getContextPath() + 'addData.php',
            beforeSend: function(x) {
                if (x && x.overrideMimeType) {
                    x.overrideMimeType("application/j-son;charset=UTF-8");
                }
            },
            success: function(data) {},
            error: function(data) {
                console.log(data.responseText);
            }
        });

        // Data should have been sent, reset our activity
        activityCount = 0;
    };

    // Client token, if 40s have passed create a new token
    var lastTokenDate = localStorage.getItem('lastTokenDate');
    if (localStorage.getItem('token') === null || (new Date() - Date.parse(lastTokenDate) > 40000)) {
        // New token
        localStorage.setItem('token', UST.randomToken());

        // Erase old clientID
        localStorage.removeItem('clientID');
    }

    var token = localStorage.getItem('token');
    localStorage.setItem('lastTokenDate', new Date());

    // Make sure tab is focused while recording
    var focused = true;
    jQuery(document).hover(function() {
            focused = true;
        },
        function() {
            focused = false;
        });

    /*** Tracker ***/
    var lastDate = new Date();
    var scrollTimeout = null;
    var maxTimeout = 3000;
    var movements = {};
    var clicks = {};
    var record = [];
    var activityCount = 0;

    // Last movement coordinates, relX -> static anchor
    var lastX, lastY, relX = 0;

    var cachedClicks = localStorage.getItem('clicks');
    if (cachedClicks !== null && cachedClicks !== undefined) {
        clicks = JSON.parse(cachedClicks);
        UST.sendData(localStorage.getItem('clientPageID'));
    }

    // Send complete record stored in localStorage to server
    var cachedRecords = localStorage.getItem('record');
    localStorage.removeItem('record');

    if (cachedRecords !== null && cachedRecords !== undefined) {
        if (cachedRecords.length > 2) {
            jQuery.ajax({
                type: "POST",
                data: {
                    record: cachedRecords,
                    what: 'record',
                    clientPageID: localStorage.getItem('clientPageID')
                },
                url: getContextPath() + 'addData.php',
                beforeSend: function(x) {
                    if (x && x.overrideMimeType) {
                        x.overrideMimeType("application/j-son;charset=UTF-8");
                    }
                },
                success: function() {},
                error: function(data) {
                    console.log(data.responseText);
                }
            });
        } else {
            // Too little data for a recording
            localStorage.removeItem('record');
        }
    }

    // Get clientPageID (based on token and current page info)
    var clientPageID;
    var clientID = localStorage.getItem('clientID');

    jQuery.ajax({
        type: "POST",
        crossDomain: UST.settings.serverPath !== '',
        dataType: "JSON",
        data: {
            resolution: ((window.innerWidth || (document.documentElement.clientWidth + 17)) + ' ' + (window.innerHeight || (document.documentElement.clientHeight))),
            token: token,
            url: UST.getCleanPageURL(),
            domain: getDomain(),
            clientID: clientID,
        },
        url: getContextPath() + 'tracker/createClient.php',
        beforeSend: function(x) {
            if (x && x.overrideMimeType) {
                x.overrideMimeType("application/j-son;charset=UTF-8");
            }
        },
        success: function(data) {
            UST.DEBUG && console.log(data);

            // Save current page session ID
            clientPageID = data.clientPageID;

            // Cache clientPageID for sending full recording on next page load
            localStorage.setItem('clientPageID', clientPageID);

            // Also cache client id
            localStorage.setItem('clientID', data.clientID);

            startSendingData();
        },
        error: function(data) {
            console.log(data.responseText);
        }
    });


    // Clear partial data
    jQuery.ajax({
        type: "POST",
        data: {
            clientPageID: localStorage.getItem('clientPageID')
        },
        crossDomain: UST.settings.serverPath !== '',
        url: getContextPath() + 'helpers/clearPartial.php',
        success: function() {
            UST.DEBUG && console.log('partials cleared');
        },
        error: function(data) {
            console.log("Could not clear partial!" + data.responseText);
        }
    });

    if (UST.settings.isStatic) {
        relX = parseInt(UST.getContentDiv().offset().left);
    }

    // Record clicks
    jQuery(document).click(function(e) {
        if (!focused) {
            return;
        }

        // Ignore artificial clicks
        if (typeof e.pageX === 'undefined') {
            return;
        }

        if (UST.settings.recordClick) {
            var p = UST.coord4.fillZeros(e.pageX - relX).toString() + UST.coord4.fillZeros(e.pageY);

            if (clicks[p] === undefined) {
                clicks[p] = 0;
            }

            clicks[p]++;
        }


        // Save the data into localStorage
        record.push({
            t: 'c',
            x: e.pageX,
            y: e.pageY
        });
        localStorage.setItem('record', JSON.stringify(record));
        localStorage.setItem('url', UST.getCleanPageURL());
        activityCount += 10;

        if (jQuery(e.target).closest('a').length) {
            localStorage.setItem('clicks', JSON.stringify(clicks));
            localStorage.setItem('url', UST.getCleanPageURL());
        }
    });

    // Record scroll
    var lastScrollDate = undefined;
    jQuery(window).scroll(function() {

        var now = new Date();

        // Save scroll once every 100ms
        if (lastScrollDate == undefined || now - lastScrollDate >= 100) {
            UST.DEBUG && console.log('Scroll event recorded!');
            lastScrollDate = now;
            record.push({
                t: 's',
                x: jQuery(window).scrollLeft(),
                y: jQuery(window).scrollTop()
            });
            localStorage.setItem('record', JSON.stringify(record));
            activityCount++;
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            UST.DEBUG && console.log('Scroll event recorded!');
            record.push({
                t: 's',
                x: jQuery(window).scrollLeft(),
                y: jQuery(window).scrollTop()
            });
            localStorage.setItem('record', JSON.stringify(record));
            lastScrollDate = new Date();
            activityCount++;
        }, 100);
    });

    // Record mouse movements
    jQuery(document).mousemove(function(e) {
        if (!focused)
            return;

        var curDate = new Date();
        var passed = curDate - lastDate;
        if (passed < UST.settings.delay)
            return;

        if (--UST.settings.maxMoves > 0 && passed < maxTimeout) {
            if (lastX !== undefined && UST.settings.recordMove) {
                var p = UST.coord4.fillZeros(lastX).toString() + UST.coord4.fillZeros(lastY);

                // Also filter some possible invalid movements
                if (!(lastX === 0 || lastY === 0)) {
                    if (movements[p] === undefined)
                        movements[p] = 0;
                    movements[p]++;
                }
            }

            if (!(lastX === 0 || lastY === 0)) {
                record.push({
                    t: 'm',
                    x: e.pageX,
                    y: e.pageY
                });
                localStorage.setItem('record', JSON.stringify(record));
                activityCount++;
            }
        }

        lastDate = curDate;
        lastX = e.pageX;
        lastY = e.pageY;
        if (UST.settings.isStatic) {
            lastX -= relX;
        }
    });

    /* Record keyboard input */
    if (UST.settings.recordKeyboard) {
        jQuery(document).on('blur', 'input:not([type="submit"]):not([type="button"]), textarea', function() {

            //Don't record val change on password inputs or
            //  elements with class 'noRecord'
            if (jQuery(this).hasClass('noRecord') || jQuery(this).attr('type') == 'password')
                return;

            // Add unique selector to the blured element
            var uniquePath = jQuery(this).getPath();
            record.push({
                t: 'b',
                p: uniquePath,
                v: jQuery(this).val()
            });
            localStorage.setItem('record', JSON.stringify(record));
        });
    }

    /*!@TODO: CHANGE IN NEXT VERSION
    // Record select option change
    jQuery(document).on('change', 'select', function () {

        //Don't record val change on password inputs or
        //  elements with class 'noRecord'
        if (jQuery(this).hasClass('noRecord') || jQuery(this).attr('type') == 'password')
            return;

        var uniquePath = jQuery(this).getPath();
        record.push({ t: 'b', p: uniquePath, v: jQuery(this).val() });
        localStorage.setItem('record', JSON.stringify(record));
    });*/

    // Start sending data after clientPageID is received

    function startSendingData() {
        // Send data to server once in a while, exponential
        recurseSend(300);
    }

    function recurseSend(t) {
        UST.DEBUG && console.log("Sending data for clientPageID: ", clientPageID);

        // Max delay between data sending is 4seconds
        if (t < 4000)
            t += 400;

        // Reduce delay if activity happened soon
        if (t > 2000 && localStorage.getItem('record') && activityCount > 10) {
            t = 800;
        }

        UST.sendData(clientPageID);
        setTimeout(function() {
            recurseSend(t);
        }, t);
    }

    // Get unqiue path to div
    jQuery.fn.getPath = function() {
        if (this.length != 1) throw 'Requires one element.';
        var path, node = this;
        if (node[0].id) return "#" + node[0].id;
        while (node.length) {
            var realNode = node[0],
                name = realNode.localName;
            if (!name) break;
            name = name.toLowerCase();
            var parent = node.parent();
            var siblings = parent.children(name);
            if (siblings.length > 1) {
                name += ':eq(' + siblings.index(realNode) + ')';
            }
            path = name + (path ? '>' + path : '');
            node = parent;
        }
        return path;
    };
};

// Display the error message if userTrack can not start for some reason
var errorMessage = UST.testRequirements();
if (errorMessage !== 'ok') {
    console.log(errorMessage);
}

jQuery(function() {
    UST.init();
});

/**
 * Playback Functions
 *
 * Used if frame is insider userTrack admin panel
 */
if (top !== self) {

    var elementUnder = null,
        lastElement = null;
    var lastEvent = null;

    // Allow cross-domain interactions using HTML5 postMessage
    var receiver = function(event) {

        // Don't filter requests by domain, no security problems
        if (event.origin == UST.settings.serverPath || true) {
            // Check if JSON
            if (event.data[0] == '!' || event.data[0] > 'A' && event.data[0] < 'z')
                return;

            var data = JSON.parse(event.data);

            if (data.task !== undefined)
                lastEvent = event;

            switch (data.task) {
                // Allow hover events to be triggered, alter stylesheet
                case 'CSS':
                    for (var i = 0;; ++i) {
                        var classes = document.styleSheets[i];
                        if (classes === undefined || classes === null)
                            break;
                        classes = classes.rules;

                        if (classes === undefined || classes === null)
                            continue;

                        for (var x = 0; x < classes.length; x++) {
                            var ss = "";
                            if (classes[x].selectorText !== undefined) {
                                classes[x].selectorText = classes[x].selectorText.replace(':hover', '.hover');
                            }
                        }
                    }
                    break;

                    // Set element under
                case 'EL':
                    elementUnder = document.elementFromPoint(data.x, data.y);
                    break;

                    // Trigger hover
                case 'HOV':
                    iframeHover();
                    break;

                    // Trigger click
                case 'CLK':
                    iframeRealClick();
                    break;

                    // Update input value
                case 'VAL':
                    jQuery(data.sel).trigger('focus').val(data.val);
                    break;

                    // Return iframe size
                case 'SZ':
                    event.source.postMessage(JSON.stringify({
                        task: 'SZ',
                        w: Math.max(jQuery(document).width(), jQuery('html').width(), window.innerWidth),
                        h: Math.max(jQuery(document).height(), jQuery('html').height(), window.innerHeight)
                    }), event.origin);
                    break;

                    // Return iframe path
                case 'PTH':
                    event.source.postMessage(JSON.stringify({
                        task: 'PTH',
                        p: location.pathname
                    }), event.origin);
                    break;

                    // Scroll iframe
                case 'SCR':
                    jQuery(document).scrollTop(data.top);
                    jQuery(document).scrollLeft(data.left);
                    break;

                    // X position of first div
                case 'STATIC':
                    event.source.postMessage(JSON.stringify({
                        task: 'STATIC',
                        X: UST.getContentDiv().offset().left
                    }), event.origin);
                    break;

                    // Append the html2canvas library
                case 'addHtml2canvas':
                    if (typeof window.html2canvasAdded === "undefined") {
                        window.html2canvasAdded = true;
                        var s = document.createElement("script");
                        s.type = "text/javascript";
                        document.body.appendChild(s);
                        s.onload = function() {
                            event.source.postMessage(JSON.stringify({
                                task: 'html2canvasAdded'
                            }), event.origin);
                        };
                        s.src = UST.settings.serverPath + '/lib/html2canvas/html2canvas.js';
                    } else {
                        // The script is already added
                        event.source.postMessage(JSON.stringify({
                            task: 'html2canvasAdded'
                        }), event.origin);
                    }
                    break;

                    // Return a screenshot of the site
                case 'screenshot':
                    // Scroll to top before trying to add the screenshot
                    jQuery(document).scrollTop(0);
                    jQuery(document).scrollLeft(0);

                    html2canvas(document.body, {
                        logging: false,
                        useCORS: false,
                        proxy: UST.settings.serverPath + '/lib/html2canvas/proxy.php',
                    }).then(function(canvas) {
                        var img = new Image();
                        img.onload = function() {
                            img.onload = null;
                            event.source.postMessage(JSON.stringify({
                                task: 'screenshot',
                                img: img.src
                            }), event.origin);
                        };
                        img.onerror = function() {
                            img.onerror = null;
                            window.console.log("Not loaded image from canvas.toDataURL");

                        };
                        img.src = canvas.toDataURL("image/png");
                    });
                    break;

            }
        }
    };

    // Send scroll event back to panel
    //iframe is scrolled
    jQuery(document).scroll(function() {
        var t = jQuery(this).scrollTop();
        var l = jQuery(this).scrollLeft();
        if (lastEvent !== null) {
            lastEvent.source.postMessage(JSON.stringify({
                task: 'SCROLL',
                top: t,
                left: l
            }), lastEvent.origin);
        } else {
            console.log("Scroll event happened before parent call to iframe");
        }
    });

    // Triger click
    var iframeRealClick = function() {
        if (elementUnder !== null) {
            if (elementUnder.nodeName == 'SELECT') {
                jQuery(elementUnder).get(0).setAttribute('size', elementUnder.options.length);
            } else {
                var link = jQuery(elementUnder).parents('a').eq(0);
                if (link !== undefined) {
                    link = link.attr('href');
                    if (link !== undefined && (link.indexOf('//') != -1 || link.indexOf('www.') != -1) && link.indexOf(window.location.host) == -1)
                        link = 'external';
                }

                // Check for page leave
                if (link !== 'external') {
                    // Don't trigger click if element has class UST_noClick
                    if (!jQuery(elementUnder).closest('.UST_noClick').length) {
                        fireEvent(elementUnder, 'click');
                    } else {
                        UST.DEBUG && console.log("Didn't trigger the click. Had class UST_noClick");
                    }
                } else {
                    alertify.alert('User has left the website');
                }
            }
        }

        if (lastElement !== null && lastElement.nodeName == 'SELECT')
            jQuery(lastElement).get(0).setAttribute('size', 1);
        lastElement = elementUnder;
    };

    // Trigger hover event
    var lastHover = null;
    var lastParents = null;
    var iframeHover = function() {
        if (lastHover != elementUnder) {
            var parents = jQuery(elementUnder).parents().addBack();

            if (lastParents !== null) {
                lastParents.removeClass("hover");
                lastParents.trigger("mouseout");
            }

            parents.addClass("hover");
            parents.trigger("mouseover");

            lastParents = parents;
        } else {
            return 1;
        }

        // No element is currently hovered
        lastHover = elementUnder;
        return 0;
    };

    // Function used to trigger click event
    var fireEvent = function(element, event) {
        var evt;
        if (document.createEvent) {
            // Dispatch for firefox + others
            evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, true, true); // event type,bubbling,cancelable
            return !element.dispatchEvent(evt);
        } else {
            // Dispatch for IE
            evt = document.createEventObject();
            return element.fireEvent('on' + event, evt);
        }
    };

    window.addEventListener('message', receiver, false);
}
