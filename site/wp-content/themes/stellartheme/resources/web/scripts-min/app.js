"use strict";function _typeof2(o){"@babel/helpers - typeof";return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof2(o);}(function webpackUniversalModuleDefinition(root,factory){if((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&(typeof module==="undefined"?"undefined":_typeof2(module))==='object')module.exports=factory(require("jquery"));else if(typeof define==='function'&&define.amd)define(["jquery"],factory);else{var a=(typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'?factory(require("jquery")):factory(root["jQuery"]);for(var i in a)((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'?exports:root)[i]=a[i];}})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__){return/******/function(){// webpackBootstrap
/******/"use strict";/******/var __webpack_modules__={/***/"./js/foundation.abide.js":(/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************//***/function _js_foundationAbideJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Abide:function Abide(){return/* binding */_Abide;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Abide module.
 * @module foundation.abide
 */var _Abide=/*#__PURE__*/function(_Plugin){function Abide(){_classCallCheck(this,Abide);return _callSuper(this,Abide,arguments);}_inherits(Abide,_Plugin);return _createClass(Abide,[{key:"_setup",value:/**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(true,{},Abide.defaults,this.$element.data(),options);this.isEnabled=true;this.formnovalidate=null;this.className='Abide';// ie9 back compat
this._init();}/**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */},{key:"_init",value:function _init(){var _this2=this;this.$inputs=jquery__WEBPACK_IMPORTED_MODULE_0___default().merge(// Consider as input to validate:
this.$element.find('input').not('[type="submit"]'),// * all input fields expect submit
this.$element.find('textarea, select')// * all textareas and select fields
);this.$submits=this.$element.find('[type="submit"]');var $globalErrors=this.$element.find('[data-abide-error]');// Add a11y attributes to all fields
if(this.options.a11yAttributes){this.$inputs.each(function(i,input){return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));});$globalErrors.each(function(i,error){return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));});}this._events();}/**
     * Initializes events for Abide.
     * @private
     */},{key:"_events",value:function _events(){var _this3=this;this.$element.off('.abide').on('reset.zf.abide',function(){_this3.resetForm();}).on('submit.zf.abide',function(){return _this3.validateForm();});this.$submits.off('click.zf.abide keydown.zf.abide').on('click.zf.abide keydown.zf.abide',function(e){if(!e.key||e.key===' '||e.key==='Enter'){e.preventDefault();_this3.formnovalidate=e.target.getAttribute('formnovalidate')!==null;_this3.$element.submit();}});if(this.options.validateOn==='fieldChange'){this.$inputs.off('change.zf.abide').on('change.zf.abide',function(e){_this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));});}if(this.options.liveValidate){this.$inputs.off('input.zf.abide').on('input.zf.abide',function(e){_this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));});}if(this.options.validateOnBlur){this.$inputs.off('blur.zf.abide').on('blur.zf.abide',function(e){_this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));});}}/**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */},{key:"_reflow",value:function _reflow(){this._init();}/**
     * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled
     * @returns {Boolean}
     * @private
     */},{key:"_validationIsDisabled",value:function _validationIsDisabled(){if(this.isEnabled===false){// whole validation disabled
return true;}else if(typeof this.formnovalidate==='boolean'){// triggered by $submit
return this.formnovalidate;}// triggered by Enter in non-submit input
return this.$submits.length?this.$submits[0].getAttribute('formnovalidate')!==null:false;}/**
     * Enables the whole validation
     */},{key:"enableValidation",value:function enableValidation(){this.isEnabled=true;}/**
     * Disables the whole validation
     */},{key:"disableValidation",value:function disableValidation(){this.isEnabled=false;}/**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"requiredCheck",value:function requiredCheck($el){if(!$el.attr('required'))return true;var isGood=true;switch($el[0].type){case'checkbox':isGood=$el[0].checked;break;case'select':case'select-one':case'select-multiple':var opt=$el.find('option:selected');if(!opt.length||!opt.val())isGood=false;break;default:if(!$el.val()||!$el.val().length)isGood=false;}return isGood;}/**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @param {String[]} [failedValidators] - List of failed validators.
     * @returns {Object} jQuery object with the selector.
     */},{key:"findFormError",value:function findFormError($el,failedValidators){var _this4=this;var id=$el.length?$el[0].id:'';var $error=$el.siblings(this.options.formErrorSelector);if(!$error.length){$error=$el.parent().find(this.options.formErrorSelector);}if(id){$error=$error.add(this.$element.find("[data-form-error-for=\"".concat(id,"\"]")));}if(!!failedValidators){$error=$error.not('[data-form-error-on]');failedValidators.forEach(function(v){$error=$error.add($el.siblings("[data-form-error-on=\"".concat(v,"\"]")));$error=$error.add(_this4.$element.find("[data-form-error-for=\"".concat(id,"\"][data-form-error-on=\"").concat(v,"\"]")));});}return $error;}/**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findLabel",value:function findLabel($el){var id=$el[0].id;var $label=this.$element.find("label[for=\"".concat(id,"\"]"));if(!$label.length){return $el.closest('label');}return $label;}/**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findRadioLabels",value:function findRadioLabels($els){var _this5=this;var labels=$els.map(function(i,el){var id=el.id;var $label=_this5.$element.find("label[for=\"".concat(id,"\"]"));if(!$label.length){$label=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');}return $label[0];});return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);}/**
     * Get the set of labels associated with a set of checkbox els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findCheckboxLabels",value:function findCheckboxLabels($els){var _this6=this;var labels=$els.map(function(i,el){var id=el.id;var $label=_this6.$element.find("label[for=\"".concat(id,"\"]"));if(!$label.length){$label=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');}return $label[0];});return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);}/**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     * @param {String[]} [failedValidators] - List of failed validators.
     */},{key:"addErrorClasses",value:function addErrorClasses($el,failedValidators){var $label=this.findLabel($el);var $formError=this.findFormError($el,failedValidators);if($label.length){$label.addClass(this.options.labelErrorClass);}if($formError.length){$formError.addClass(this.options.formErrorClass);}$el.addClass(this.options.inputErrorClass).attr({'data-invalid':'','aria-invalid':true});if($formError.filter(':visible').length){this.addA11yErrorDescribe($el,$formError);}}/**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */},{key:"addA11yAttributes",value:function addA11yAttributes($el){var $errors=this.findFormError($el);var $labels=$errors.filter('label');if(!$errors.length)return;var $error=$errors.filter(':visible').first();if($error.length){this.addA11yErrorDescribe($el,$error);}if($labels.filter('[for]').length<$labels.length){// Get the input ID or create one
var elemId=$el.attr('id');if(typeof elemId==='undefined'){elemId=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'abide-input');$el.attr('id',elemId);}// For each label targeting $el, set [for] if it is not set.
$labels.each(function(i,label){var $label=jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);if(typeof $label.attr('for')==='undefined')$label.attr('for',elemId);});}// For each error targeting $el, set [role=alert] if it is not set.
$errors.each(function(i,label){var $label=jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);if(typeof $label.attr('role')==='undefined')$label.attr('role','alert');}).end();}},{key:"addA11yErrorDescribe",value:function addA11yErrorDescribe($el,$error){if($el.attr('type')==='hidden')return;if(typeof $el.attr('aria-describedby')!=='undefined')return;// Set [aria-describedby] on the input toward the first form error if it is not set
// Get the first error ID or create one
var errorId=$error.attr('id');if(typeof errorId==='undefined'){errorId=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'abide-error');$error.attr('id',errorId);}$el.attr('aria-describedby',errorId).data('abide-describedby',true);}/**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */},{key:"addGlobalErrorA11yAttributes",value:function addGlobalErrorA11yAttributes($el){if(typeof $el.attr('aria-live')==='undefined')$el.attr('aria-live',this.options.a11yErrorLevel);}/**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */},{key:"removeRadioErrorClasses",value:function removeRadioErrorClasses(groupName){var $els=this.$element.find(":radio[name=\"".concat(groupName,"\"]"));var $labels=this.findRadioLabels($els);var $formErrors=this.findFormError($els);if($labels.length){$labels.removeClass(this.options.labelErrorClass);}if($formErrors.length){$formErrors.removeClass(this.options.formErrorClass);}$els.removeClass(this.options.inputErrorClass).attr({'data-invalid':null,'aria-invalid':null});}/**
     * Remove CSS error classes etc from an entire checkbox group
     * @param {String} groupName - A string that specifies the name of a checkbox group
     *
     */},{key:"removeCheckboxErrorClasses",value:function removeCheckboxErrorClasses(groupName){var $els=this.$element.find(":checkbox[name=\"".concat(groupName,"\"]"));var $labels=this.findCheckboxLabels($els);var $formErrors=this.findFormError($els);if($labels.length){$labels.removeClass(this.options.labelErrorClass);}if($formErrors.length){$formErrors.removeClass(this.options.formErrorClass);}$els.removeClass(this.options.inputErrorClass).attr({'data-invalid':null,'aria-invalid':null});}/**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */},{key:"removeErrorClasses",value:function removeErrorClasses($el){// radios need to clear all of the els
if($el[0].type==='radio'){return this.removeRadioErrorClasses($el.attr('name'));}// checkboxes need to clear all of the els
else if($el[0].type==='checkbox'){return this.removeCheckboxErrorClasses($el.attr('name'));}var $label=this.findLabel($el);var $formError=this.findFormError($el);if($label.length){$label.removeClass(this.options.labelErrorClass);}if($formError.length){$formError.removeClass(this.options.formErrorClass);}$el.removeClass(this.options.inputErrorClass).attr({'data-invalid':null,'aria-invalid':null});if($el.data('abide-describedby')){$el.removeAttr('aria-describedby').removeData('abide-describedby');}}/**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */},{key:"validateInput",value:function validateInput($el){var _this7=this;var clearRequire=this.requiredCheck($el),validator=$el.attr('data-validator'),failedValidators=[],manageErrorClasses=true;// skip validation if disabled
if(this._validationIsDisabled()){return true;}// don't validate ignored inputs or hidden inputs or disabled inputs
if($el.is('[data-abide-ignore]')||$el.is('[type="hidden"]')||$el.is('[disabled]')){return true;}switch($el[0].type){case'radio':this.validateRadio($el.attr('name'))||failedValidators.push('required');break;case'checkbox':this.validateCheckbox($el.attr('name'))||failedValidators.push('required');// validateCheckbox() adds/removes error classes
manageErrorClasses=false;break;case'select':case'select-one':case'select-multiple':clearRequire||failedValidators.push('required');break;default:clearRequire||failedValidators.push('required');this.validateText($el)||failedValidators.push('pattern');}if(validator){var required=$el.attr('required')?true:false;validator.split(' ').forEach(function(v){_this7.options.validators[v]($el,required,$el.parent())||failedValidators.push(v);});}if($el.attr('data-equalto')){this.options.validators.equalTo($el)||failedValidators.push('equalTo');}var goodToGo=failedValidators.length===0;var message=(goodToGo?'valid':'invalid')+'.zf.abide';if(goodToGo){// Re-validate inputs that depend on this one with equalto
var dependentElements=this.$element.find("[data-equalto=\"".concat($el.attr('id'),"\"]"));if(dependentElements.length){var _this=this;dependentElements.each(function(){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()){_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));}});}}if(manageErrorClasses){this.removeErrorClasses($el);if(!goodToGo){this.addErrorClasses($el,failedValidators);}}/**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */$el.trigger(message,[$el]);return goodToGo;}/**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */},{key:"validateForm",value:function validateForm(){var _this8=this;var acc=[];var _this=this;var checkboxGroupName;// Remember first form submission to prevent specific checkbox validation (more than one required) until form got initially submitted
if(!this.initialized){this.initialized=true;}// skip validation if disabled
if(this._validationIsDisabled()){this.formnovalidate=null;return true;}this.$inputs.each(function(){// Only use one checkbox per group since validateCheckbox() iterates over all associated checkboxes
if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].type==='checkbox'){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name')===checkboxGroupName)return true;checkboxGroupName=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');}acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));});var noError=acc.indexOf(false)===-1;this.$element.find('[data-abide-error]').each(function(i,elem){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem);// Ensure a11y attributes are set
if(_this8.options.a11yAttributes)_this8.addGlobalErrorA11yAttributes($elem);// Show or hide the error
$elem.css('display',noError?'none':'block');});/**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */this.$element.trigger((noError?'formvalid':'forminvalid')+'.zf.abide',[this.$element]);return noError;}/**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */},{key:"validateText",value:function validateText($el,pattern){// A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
pattern=pattern||$el.attr('data-pattern')||$el.attr('pattern')||$el.attr('type');var inputText=$el.val();var valid=true;if(inputText.length){// If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
if(this.options.patterns.hasOwnProperty(pattern)){valid=this.options.patterns[pattern].test(inputText);}// If the pattern name isn't also the type attribute of the field, then test it as a regexp
else if(pattern!==$el.attr('type')){valid=new RegExp(pattern).test(inputText);}}return valid;}/**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */},{key:"validateRadio",value:function validateRadio(groupName){// If at least one radio in the group has the `required` attribute, the group is considered required
// Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
var $group=this.$element.find(":radio[name=\"".concat(groupName,"\"]"));var valid=false,required=false;// For the group to be required, at least one radio needs to be required
$group.each(function(i,e){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')){required=true;}});if(!required)valid=true;if(!valid){// For the group to be valid, at least one radio needs to be checked
$group.each(function(i,e){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')){valid=true;}});}return valid;}/**
     * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all checkboxes in its group.
     * @param {String} groupName - A string that specifies the name of a checkbox group
     * @returns {Boolean} Boolean value depends on whether or not at least one checkbox input has been checked (if it's required)
     */},{key:"validateCheckbox",value:function validateCheckbox(groupName){var _this9=this;// If at least one checkbox in the group has the `required` attribute, the group is considered required
// Per W3C spec, all checkboxes in a group should have `required`, but we're being nice
var $group=this.$element.find(":checkbox[name=\"".concat(groupName,"\"]"));var valid=false,required=false,minRequired=1,checked=0;// For the group to be required, at least one checkbox needs to be required
$group.each(function(i,e){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')){required=true;}});if(!required)valid=true;if(!valid){// Count checked checkboxes within the group
// Use data-min-required if available (default: 1)
$group.each(function(i,e){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')){checked++;}if(typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required')!=='undefined'){minRequired=parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required'),10);}});// For the group to be valid, the minRequired amount of checkboxes have to be checked
if(checked>=minRequired){valid=true;}}// Skip validation if more than 1 checkbox have to be checked AND if the form hasn't got submitted yet (otherwise it will already show an error during the first fill in)
if(this.initialized!==true&&minRequired>1){return true;}// Refresh error class for all input
$group.each(function(i,e){if(!valid){_this9.addErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e),['required']);}else{_this9.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e));}});return valid;}/**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */},{key:"matchValidation",value:function matchValidation($el,validators,required){var _this10=this;required=required?true:false;var clear=validators.split(' ').map(function(v){return _this10.options.validators[v]($el,required,$el.parent());});return clear.indexOf(false)===-1;}/**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */},{key:"resetForm",value:function resetForm(){var $form=this.$element,opts=this.options;jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass),$form).not('small').removeClass(opts.labelErrorClass);jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass),$form).not('small').removeClass(opts.inputErrorClass);jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector,".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);$form.find('[data-abide-error]').css('display','none');jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input',$form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({'data-invalid':null,'aria-invalid':null});jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio',$form).not('[data-abide-ignore]').prop('checked',false).attr({'data-invalid':null,'aria-invalid':null});jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox',$form).not('[data-abide-ignore]').prop('checked',false).attr({'data-invalid':null,'aria-invalid':null});/**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */$form.trigger('formreset.zf.abide',[$form]);}/**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */},{key:"_destroy",value:function _destroy(){var _this=this;this.$element.off('.abide').find('[data-abide-error]').css('display','none');this.$inputs.off('.abide').each(function(){_this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));});this.$submits.off('.abide');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);/**
 * Default settings for plugin
 */_Abide.defaults={/**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */validateOn:'fieldChange',/**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */labelErrorClass:'is-invalid-label',/**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */inputErrorClass:'is-invalid-input',/**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */formErrorSelector:'.form-error',/**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */formErrorClass:'is-visible',/**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */a11yAttributes:true,/**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */a11yErrorLevel:'assertive',/**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */liveValidate:false,/**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */validateOnBlur:false,patterns:{alpha:/^[a-zA-Z]+$/,// eslint-disable-next-line camelcase
alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,// amex, visa, diners
card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,// http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,// From CommonRegexJS (@talyssonoc)
// https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
// For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,// abc.de
domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,// YYYY-MM-DD
date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,// HH:MM:SS
time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,// MM/DD/YYYY
// eslint-disable-next-line camelcase
month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,// DD/MM/YYYY
// eslint-disable-next-line camelcase
day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,// #FFF or #FFFFFF
color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,// Domain || URL
website:{test:function test(text){return _Abide.defaults.patterns.domain.test(text)||_Abide.defaults.patterns.url.test(text);}}},/**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * @option
   */validators:{equalTo:function equalTo(el){return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val()===el.val();}}};/***/}),/***/"./js/foundation.accordion.js":(/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************//***/function _js_foundationAccordionJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Accordion:function Accordion(){return/* binding */_Accordion;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */var _Accordion=/*#__PURE__*/function(_Plugin){function Accordion(){_classCallCheck(this,Accordion);return _callSuper(this,Accordion,arguments);}_inherits(Accordion,_Plugin);return _createClass(Accordion,[{key:"_setup",value:/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Accordion.defaults,this.$element.data(),options);this.className='Accordion';// ie9 back compat
this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('Accordion',{'ENTER':'toggle','SPACE':'toggle','ARROW_DOWN':'next','ARROW_UP':'previous','HOME':'first','END':'last'});}/**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */},{key:"_init",value:function _init(){var _this2=this;this._isInitializing=true;this.$tabs=this.$element.children('[data-accordion-item]');this.$tabs.each(function(idx,el){var $el=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),$content=$el.children('[data-tab-content]'),id=$content[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'accordion'),linkId=el.id?"".concat(el.id,"-label"):"".concat(id,"-label");$el.find('a:first').attr({'aria-controls':id,'id':linkId,'aria-expanded':false});$content.attr({'role':'region','aria-labelledby':linkId,'aria-hidden':true,'id':id});});var $initActive=this.$element.find('.is-active').children('[data-tab-content]');if($initActive.length){// Save up the initial hash to return to it later when going back in history
this._initialAnchor=$initActive.prev('a').attr('href');this._openSingleTab($initActive);}this._checkDeepLink=function(){var anchor=window.location.hash;if(!anchor.length){// If we are still initializing and there is no anchor, then there is nothing to do
if(_this2._isInitializing)return;// Otherwise, move to the initial anchor
if(_this2._initialAnchor)anchor=_this2._initialAnchor;}var $anchor=anchor&&jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);var $link=anchor&&_this2.$element.find("[href$=\"".concat(anchor,"\"]"));// Whether the anchor element that has been found is part of this element
var isOwnAnchor=!!($anchor.length&&$link.length);if(isOwnAnchor){// If there is an anchor for the hash, open it (if not already active)
if($anchor&&$link&&$link.length){if(!$link.parent('[data-accordion-item]').hasClass('is-active')){_this2._openSingleTab($anchor);}}// Otherwise, close everything
else{_this2._closeAllTabs();}// Roll up a little to show the titles
if(_this2.options.deepLinkSmudge){(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){var offset=_this2.$element.offset();jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({scrollTop:offset.top-_this2.options.deepLinkSmudgeOffset},_this2.options.deepLinkSmudgeDelay);});}/**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */_this2.$element.trigger('deeplink.zf.accordion',[$link,$anchor]);}};//use browser to open a tab, if it exists in this tabset
if(this.options.deepLink){this._checkDeepLink();}this._events();this._isInitializing=false;}/**
     * Adds event handlers for items within the accordion.
     * @private
     */},{key:"_events",value:function _events(){var _this=this;this.$tabs.each(function(){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);var $tabContent=$elem.children('[data-tab-content]');if($tabContent.length){$elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion',function(e){e.preventDefault();_this.toggle($tabContent);}).on('keydown.zf.accordion',function(e){_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e,'Accordion',{toggle:function toggle(){_this.toggle($tabContent);},next:function next(){var $a=$elem.next().find('a').focus();if(!_this.options.multiExpand){$a.trigger('click.zf.accordion');}},previous:function previous(){var $a=$elem.prev().find('a').focus();if(!_this.options.multiExpand){$a.trigger('click.zf.accordion');}},first:function first(){var $a=_this.$tabs.first().find('.accordion-title').focus();if(!_this.options.multiExpand){$a.trigger('click.zf.accordion');}},last:function last(){var $a=_this.$tabs.last().find('.accordion-title').focus();if(!_this.options.multiExpand){$a.trigger('click.zf.accordion');}},handled:function handled(){e.preventDefault();}});});}});if(this.options.deepLink){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange',this._checkDeepLink);}}/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:"toggle",value:function toggle($target){if($target.closest('[data-accordion]').is('[disabled]')){console.info('Cannot toggle an accordion that is disabled.');return;}if($target.parent().hasClass('is-active')){this.up($target);}else{this.down($target);}//either replace or update browser history
if(this.options.deepLink){var anchor=$target.prev('a').attr('href');if(this.options.updateHistory){history.pushState({},'',anchor);}else{history.replaceState({},'',anchor);}}}/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */},{key:"down",value:function down($target){if($target.closest('[data-accordion]').is('[disabled]')){console.info('Cannot call down on an accordion that is disabled.');return;}if(this.options.multiExpand)this._openTab($target);else this._openSingleTab($target);}/**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:"up",value:function up($target){if(this.$element.is('[disabled]')){console.info('Cannot call up on an accordion that is disabled.');return;}// Don't close the item if it is already closed
var $targetItem=$target.parent();if(!$targetItem.hasClass('is-active'))return;// Don't close the item if there is no other active item (unless with `allowAllClosed`)
var $othersItems=$targetItem.siblings();if(!this.options.allowAllClosed&&!$othersItems.hasClass('is-active'))return;this._closeTab($target);}/**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */},{key:"_openSingleTab",value:function _openSingleTab($target){// Close all the others active tabs.
var $activeContents=this.$element.children('.is-active').children('[data-tab-content]');if($activeContents.length){this._closeTab($activeContents.not($target));}// Then open the target.
this._openTab($target);}/**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */},{key:"_openTab",value:function _openTab($target){var _this3=this;var $targetItem=$target.parent();var targetContentId=$target.attr('aria-labelledby');$target.attr('aria-hidden',false);$targetItem.addClass('is-active');jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({'aria-expanded':true});$target.finish().slideDown(this.options.slideSpeed,function(){/**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */_this3.$element.trigger('down.zf.accordion',[$target]);});}/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeTab",value:function _closeTab($target){var _this4=this;var $targetItem=$target.parent();var targetContentId=$target.attr('aria-labelledby');$target.attr('aria-hidden',true);$targetItem.removeClass('is-active');jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({'aria-expanded':false});$target.finish().slideUp(this.options.slideSpeed,function(){/**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */_this4.$element.trigger('up.zf.accordion',[$target]);});}/**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeAllTabs",value:function _closeAllTabs(){var $activeTabs=this.$element.children('.is-active').children('[data-tab-content]');if($activeTabs.length){this._closeTab($activeTabs);}}/**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display','');this.$element.find('a').off('.zf.accordion');if(this.options.deepLink){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange',this._checkDeepLink);}}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);_Accordion.defaults={/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */slideSpeed:250,/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */multiExpand:false,/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */allowAllClosed:false,/**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */deepLink:false,/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */deepLinkSmudge:false,/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */deepLinkSmudgeDelay:300,/**
   * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at the top of the page
   * @option
   * @type {number}
   * @default 0
   */deepLinkSmudgeOffset:0,/**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */updateHistory:false};/***/}),/***/"./js/foundation.accordionMenu.js":(/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************//***/function _js_foundationAccordionMenuJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */AccordionMenu:function AccordionMenu(){return/* binding */_AccordionMenu;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.nest */"./js/foundation.util.nest.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */var _AccordionMenu=/*#__PURE__*/function(_Plugin){function AccordionMenu(){_classCallCheck(this,AccordionMenu);return _callSuper(this,AccordionMenu,arguments);}_inherits(AccordionMenu,_Plugin);return _createClass(AccordionMenu,[{key:"_setup",value:/**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},AccordionMenu.defaults,this.$element.data(),options);this.className='AccordionMenu';// ie9 back compat
this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('AccordionMenu',{'ENTER':'toggle','SPACE':'toggle','ARROW_RIGHT':'open','ARROW_UP':'up','ARROW_DOWN':'down','ARROW_LEFT':'close','ESCAPE':'closeAll'});}/**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Feather(this.$element,'accordion');var _this=this;this.$element.find('[data-submenu]').not('.is-active').slideUp(0);//.find('a').css('padding-left', '1rem');
this.$element.attr({'aria-multiselectable':this.options.multiOpen});this.$menuLinks=this.$element.find('.is-accordion-submenu-parent');this.$menuLinks.each(function(){var linkId=this.id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'acc-menu-link'),$elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$sub=$elem.children('[data-submenu]'),subId=$sub[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'acc-menu'),isActive=$sub.hasClass('is-active');if(_this.options.parentLink){var $anchor=$elem.children('a');$anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');}if(_this.options.submenuToggle){$elem.addClass('has-submenu-toggle');$elem.children('a').after('<button id="'+linkId+'" class="submenu-toggle" aria-controls="'+subId+'" aria-expanded="'+isActive+'" title="'+_this.options.submenuToggleText+'"><span class="submenu-toggle-text">'+_this.options.submenuToggleText+'</span></button>');}else{$elem.attr({'aria-controls':subId,'aria-expanded':isActive,'id':linkId});}$sub.attr({'aria-labelledby':linkId,'aria-hidden':!isActive,'role':'group','id':subId});});var initPanes=this.$element.find('.is-active');if(initPanes.length){initPanes.each(function(){_this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));});}this._events();}/**
     * Adds event handlers for items within the menu.
     * @private
     */},{key:"_events",value:function _events(){var _this=this;this.$element.find('li').each(function(){var $submenu=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');if($submenu.length){if(_this.options.submenuToggle){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu',function(){_this.toggle($submenu);});}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu',function(e){e.preventDefault();_this.toggle($submenu);});}}}).on('keydown.zf.accordionMenu',function(e){var $element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$elements=$element.parent('ul').children('li'),$prevElement,$nextElement,$target=$element.children('[data-submenu]');$elements.each(function(i){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)){$prevElement=$elements.eq(Math.max(0,i-1)).find('a').first();$nextElement=$elements.eq(Math.min(i+1,$elements.length-1)).find('a').first();if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length){// has open sub menu
$nextElement=$element.find('li:first-child').find('a').first();}if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')){// is first element of sub menu
$prevElement=$element.parents('li').first().find('a').first();}else if($prevElement.parents('li').first().children('[data-submenu]:visible').length){// if previous element has open sub menu
$prevElement=$prevElement.parents('li').find('li:last-child').find('a').first();}if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')){// is last element of sub menu
$nextElement=$element.parents('li').first().next('li').find('a').first();}return;}});_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e,'AccordionMenu',{open:function open(){if($target.is(':hidden')){_this.down($target);$target.find('li').first().find('a').first().focus();}},close:function close(){if($target.length&&!$target.is(':hidden')){// close active sub of this item
_this.up($target);}else if($element.parent('[data-submenu]').length){// close currently open sub
_this.up($element.parent('[data-submenu]'));$element.parents('li').first().find('a').first().focus();}},up:function up(){$prevElement.focus();return true;},down:function down(){$nextElement.focus();return true;},toggle:function toggle(){if(_this.options.submenuToggle){return false;}if($element.children('[data-submenu]').length){_this.toggle($element.children('[data-submenu]'));return true;}},closeAll:function closeAll(){_this.hideAll();},handled:function handled(preventDefault){if(preventDefault){e.preventDefault();}}});});//.attr('tabindex', 0);
}/**
     * Closes all panes of the menu.
     * @function
     */},{key:"hideAll",value:function hideAll(){this.up(this.$element.find('[data-submenu]'));}/**
     * Opens all panes of the menu.
     * @function
     */},{key:"showAll",value:function showAll(){this.down(this.$element.find('[data-submenu]'));}/**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */},{key:"toggle",value:function toggle($target){if(!$target.is(':animated')){if(!$target.is(':hidden')){this.up($target);}else{this.down($target);}}}/**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */},{key:"down",value:function down($target){var _this2=this;// If having multiple submenus active is disabled, close all the submenus
// that are not parents or children of the targeted submenu.
if(!this.options.multiOpen){// The "branch" of the targetted submenu, from the component root to
// the active submenus nested in it.
var $targetBranch=$target.parentsUntil(this.$element).add($target).add($target.find('.is-active'));// All the active submenus that are not in the branch.
var $othersActiveSubmenus=this.$element.find('.is-active').not($targetBranch);this.up($othersActiveSubmenus);}$target.addClass('is-active').attr({'aria-hidden':false});if(this.options.submenuToggle){$target.prev('.submenu-toggle').attr({'aria-expanded':true});}else{$target.parent('.is-accordion-submenu-parent').attr({'aria-expanded':true});}$target.slideDown(this.options.slideSpeed,function(){/**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */_this2.$element.trigger('down.zf.accordionMenu',[$target]);});}/**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */},{key:"up",value:function up($target){var _this3=this;var $submenus=$target.find('[data-submenu]');var $allmenus=$target.add($submenus);$submenus.slideUp(0);$allmenus.removeClass('is-active').attr('aria-hidden',true);if(this.options.submenuToggle){$allmenus.prev('.submenu-toggle').attr('aria-expanded',false);}else{$allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded',false);}$target.slideUp(this.options.slideSpeed,function(){/**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */_this3.$element.trigger('up.zf.accordionMenu',[$target]);});}/**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */},{key:"_destroy",value:function _destroy(){this.$element.find('[data-submenu]').slideDown(0).css('display','');this.$element.find('a').off('click.zf.accordionMenu');this.$element.find('[data-is-parent-link]').detach();if(this.options.submenuToggle){this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');this.$element.find('.submenu-toggle').remove();}_foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Burn(this.$element,'accordion');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin);_AccordionMenu.defaults={/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */parentLink:false,/**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */slideSpeed:250,/**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */submenuToggle:false,/**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */submenuToggleText:'Toggle menu',/**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */multiOpen:true};/***/}),/***/"./js/foundation.core.js":(/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************//***/function _js_foundationCoreJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Foundation:function Foundation(){return/* binding */_Foundation;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}var FOUNDATION_VERSION='6.9.0';// Global Foundation object
// This is attached to the window, or used as a module for AMD/Browserify
var _Foundation={version:FOUNDATION_VERSION,/**
   * Stores initialized plugins.
   */_plugins:{},/**
   * Stores generated unique ids for plugin instances
   */_uuids:[],/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */plugin:function plugin(_plugin,name){// Object key to use when adding to global Foundation object
// Examples: Foundation.Reveal, Foundation.OffCanvas
var className=name||functionName(_plugin);// Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
// Examples: data-reveal, data-off-canvas
var attrName=hyphenate(className);// Add to the Foundation object and the plugins list (for reflowing)
this._plugins[attrName]=this[className]=_plugin;},/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */registerPlugin:function registerPlugin(plugin,name){var pluginName=name?hyphenate(name):functionName(plugin.constructor).toLowerCase();plugin.uuid=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.GetYoDigits)(6,pluginName);if(!plugin.$element.attr("data-".concat(pluginName))){plugin.$element.attr("data-".concat(pluginName),plugin.uuid);}if(!plugin.$element.data('zfPlugin')){plugin.$element.data('zfPlugin',plugin);}/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */plugin.$element.trigger("init.zf.".concat(pluginName));this._uuids.push(plugin.uuid);return;},/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */unregisterPlugin:function unregisterPlugin(plugin){var pluginName=hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));this._uuids.splice(this._uuids.indexOf(plugin.uuid),1);plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')/**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger("destroyed.zf.".concat(pluginName));for(var prop in plugin){if(typeof plugin[prop]==='function'){plugin[prop]=null;//clean up script to prep for garbage collection.
}}return;},/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */reInit:function reInit(plugins){var isJQ=plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default();try{if(isJQ){plugins.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();});}else{var type=_typeof(plugins),_this=this,fns={'object':function object(plgs){plgs.forEach(function(p){p=hyphenate(p);jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-'+p+']').foundation('_init');});},'string':function string(){plugins=hyphenate(plugins);jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-'+plugins+']').foundation('_init');},'undefined':function undefined(){this.object(Object.keys(_this._plugins));}};fns[type](plugins);}}catch(err){console.error(err);}finally{return plugins;}},/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */reflow:function reflow(elem,plugins){// If plugins is undefined, just grab everything
if(typeof plugins==='undefined'){plugins=Object.keys(this._plugins);}// If plugins is a string, convert it to an array with one item
else if(typeof plugins==='string'){plugins=[plugins];}var _this=this;// Iterate through each plugin
jquery__WEBPACK_IMPORTED_MODULE_0___default().each(plugins,function(i,name){// Get the current plugin
var plugin=_this._plugins[name];// Localize the search to all elements inside elem, as well as elem itself, unless elem === document
var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-'+name+']').addBack('[data-'+name+']').filter(function(){return typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("zfPlugin")==='undefined';});// For each plugin found, initialize it
$elem.each(function(){var $el=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),opts={reflow:true};if($el.attr('data-options')){$el.attr('data-options').split(';').forEach(function(option){var opt=option.split(':').map(function(el){return el.trim();});if(opt[0])opts[opt[0]]=parseValue(opt[1]);});}try{$el.data('zfPlugin',new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),opts));}catch(er){console.error(er);}finally{return;}});});},getFnName:functionName,addToJquery:function addToJquery(){// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */var foundation=function foundation(method){var type=_typeof(method),$noJS=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.no-js');if($noJS.length){$noJS.removeClass('no-js');}if(type==='undefined'){//needs to initialize the Foundation object, or an individual plugin.
_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery._init();_Foundation.reflow(this);}else if(type==='string'){//an individual method to invoke on a plugin or group of plugins
var args=Array.prototype.slice.call(arguments,1);//collect all the arguments, if necessary
var plugClass=this.data('zfPlugin');//determine the class of plugin
if(typeof plugClass!=='undefined'&&typeof plugClass[method]!=='undefined'){//make sure both the class and method exist
if(this.length===1){//if there's only one, call it directly.
plugClass[method].apply(plugClass,args);}else{this.each(function(i,el){//otherwise loop through the jQuery collection and invoke the method on each
plugClass[method].apply(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('zfPlugin'),args);});}}else{//error for no class or no method
throw new ReferenceError("We're sorry, '"+method+"' is not an available method for "+(plugClass?functionName(plugClass):'this element')+'.');}}else{//error for invalid argument type
throw new TypeError("We're sorry, ".concat(type," is not a valid parameter. You must use a string representing the method you wish to invoke."));}return this;};jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.foundation=foundation;return jquery__WEBPACK_IMPORTED_MODULE_0___default();}};_Foundation.util={/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */throttle:function throttle(func,delay){var timer=null;return function(){var context=this,args=arguments;if(timer===null){timer=setTimeout(function(){func.apply(context,args);timer=null;},delay);}};}};window.Foundation=_Foundation;// Polyfill for requestAnimationFrame
(function(){if(!Date.now||!window.Date.now)window.Date.now=Date.now=function(){return new Date().getTime();};var vendors=['webkit','moz'];for(var i=0;i<vendors.length&&!window.requestAnimationFrame;++i){var vp=vendors[i];window.requestAnimationFrame=window[vp+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vp+'CancelAnimationFrame']||window[vp+'CancelRequestAnimationFrame'];}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var lastTime=0;window.requestAnimationFrame=function(callback){var now=Date.now();var nextTime=Math.max(lastTime+16,now);return setTimeout(function(){callback(lastTime=nextTime);},nextTime-now);};window.cancelAnimationFrame=clearTimeout;}/**
   * Polyfill for performance.now, required by rAF
   */if(!window.performance||!window.performance.now){window.performance={start:Date.now(),now:function now(){return Date.now()-this.start;}};}})();if(!Function.prototype.bind){/* eslint-disable no-extend-native */Function.prototype.bind=function(oThis){if(typeof this!=='function'){// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');}var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function fNOP(){},fBound=function fBound(){return fToBind.apply(this instanceof fNOP?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)));};if(this.prototype){// native functions don't have a prototype
fNOP.prototype=this.prototype;}fBound.prototype=new fNOP();return fBound;};}// Polyfill to get the name of a function in IE9
function functionName(fn){if(typeof Function.prototype.name==='undefined'){var funcNameRegex=/function\s([^(]{1,})\(/;var results=funcNameRegex.exec(fn.toString());return results&&results.length>1?results[1].trim():"";}else if(typeof fn.prototype==='undefined'){return fn.constructor.name;}else{return fn.prototype.constructor.name;}}function parseValue(str){if('true'===str)return true;else if('false'===str)return false;else if(!isNaN(str*1))return parseFloat(str);return str;}// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str){return str.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();}/***/}),/***/"./js/foundation.core.plugin.js":(/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************//***/function _js_foundationCorePluginJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Plugin:function Plugin(){return/* binding */_Plugin2;}/* harmony export */});/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
var _Plugin2=/*#__PURE__*/function(){function Plugin(element,options){_classCallCheck(this,Plugin);this._setup(element,options);var pluginName=getPluginName(this);this.uuid=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__.GetYoDigits)(6,pluginName);if(!this.$element.attr("data-".concat(pluginName))){this.$element.attr("data-".concat(pluginName),this.uuid);}if(!this.$element.data('zfPlugin')){this.$element.data('zfPlugin',this);}/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */this.$element.trigger("init.zf.".concat(pluginName));}return _createClass(Plugin,[{key:"destroy",value:function destroy(){this._destroy();var pluginName=getPluginName(this);this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')/**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger("destroyed.zf.".concat(pluginName));for(var prop in this){if(this.hasOwnProperty(prop)){this[prop]=null;//clean up script to prep for garbage collection.
}}}}]);}();// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function hyphenate(str){return str.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();}function getPluginName(obj){return hyphenate(obj.className);}/***/}),/***/"./js/foundation.core.utils.js":(/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************//***/function _js_foundationCoreUtilsJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */GetYoDigits:function GetYoDigits(){return/* binding */_GetYoDigits;},/* harmony export */RegExpEscape:function RegExpEscape(){return/* binding */_RegExpEscape;},/* harmony export */ignoreMousedisappear:function ignoreMousedisappear(){return/* binding */_ignoreMousedisappear;},/* harmony export */onLoad:function onLoad(){return/* binding */_onLoad;},/* harmony export */rtl:function rtl(){return/* binding */_rtl;},/* harmony export */transitionend:function transitionend(){return/* binding */_transitionend;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);// Core Foundation Utilities, utilized in a number of places.
/**
 * Returns a boolean for RTL support
 */function _rtl(){return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir')==='rtl';}/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function _GetYoDigits(){var length=arguments.length>0&&arguments[0]!==undefined?arguments[0]:6;var namespace=arguments.length>1?arguments[1]:undefined;var str='';var chars='0123456789abcdefghijklmnopqrstuvwxyz';var charsLength=chars.length;for(var i=0;i<length;i++){str+=chars[Math.floor(Math.random()*charsLength)];}return namespace?"".concat(str,"-").concat(namespace):str;}/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */function _RegExpEscape(str){return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&');}function _transitionend($elem){var transitions={'transition':'transitionend','WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'otransitionend'};var elem=document.createElement('div'),end;for(var transition in transitions){if(typeof elem.style[transition]!=='undefined'){end=transitions[transition];}}if(end){return end;}else{setTimeout(function(){$elem.triggerHandler('transitionend',[$elem]);},1);return'transitionend';}}/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */function _onLoad($elem,handler){var didLoad=document.readyState==='complete';var eventType=(didLoad?'_didLoad':'load')+'.zf.util.onLoad';var cb=function cb(){return $elem.triggerHandler(eventType);};if($elem){if(handler)$elem.one(eventType,handler);if(didLoad)setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load',cb);}return eventType;}/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */function _ignoreMousedisappear(handler){var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref$ignoreLeaveWindo=_ref.ignoreLeaveWindow,ignoreLeaveWindow=_ref$ignoreLeaveWindo===void 0?false:_ref$ignoreLeaveWindo,_ref$ignoreReappear=_ref.ignoreReappear,ignoreReappear=_ref$ignoreReappear===void 0?false:_ref$ignoreReappear;return function leaveEventHandler(eLeave){for(var _len=arguments.length,rest=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){rest[_key-1]=arguments[_key];}var callback=handler.bind.apply(handler,[this,eLeave].concat(rest));// The mouse left: call the given callback if the mouse entered elsewhere
if(eLeave.relatedTarget!==null){return callback();}// Otherwise, check if the mouse actually left the window.
// In firefox if the user switched between windows, the window sill have the focus by the time
// the event is triggered. We have to debounce the event to test this case.
setTimeout(function leaveEventDebouncer(){if(!ignoreLeaveWindow&&document.hasFocus&&!document.hasFocus()){return callback();}// Otherwise, wait for the mouse to reeapear outside of the element,
if(!ignoreReappear){jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter',function reenterEventHandler(eReenter){if(!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length){// Fill where the mouse finally entered.
eLeave.relatedTarget=eReenter.target;callback();}});}},0);};}/***/}),/***/"./js/foundation.drilldown.js":(/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************//***/function _js_foundationDrilldownJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Drilldown:function Drilldown(){return/* binding */_Drilldown;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.nest */"./js/foundation.util.nest.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.box */"./js/foundation.util.box.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */var _Drilldown=/*#__PURE__*/function(_Plugin){function Drilldown(){_classCallCheck(this,Drilldown);return _callSuper(this,Drilldown,arguments);}_inherits(Drilldown,_Plugin);return _createClass(Drilldown,[{key:"_setup",value:/**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Drilldown.defaults,this.$element.data(),options);this.className='Drilldown';// ie9 back compat
this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Drilldown',{'ENTER':'open','SPACE':'open','ARROW_RIGHT':'next','ARROW_UP':'up','ARROW_DOWN':'down','ARROW_LEFT':'previous','ESCAPE':'close'});}/**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Feather(this.$element,'drilldown');if(this.options.autoApplyClass){this.$element.addClass('drilldown');}this.$element.attr({'aria-multiselectable':false});this.$submenuAnchors=this.$element.find('li.is-drilldown-submenu-parent').children('a');this.$submenus=this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role','group');this.$menuItems=this.$element.find('li').not('.js-drilldown-back').find('a');// Set the main menu as current by default (unless a submenu is selected)
// Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu
this.$currentMenu=this.$element;this.$element.attr('data-mutate',this.$element.attr('data-drilldown')||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'drilldown'));this._prepareMenu();this._registerEvents();this._keyboardEvents();}/**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */},{key:"_prepareMenu",value:function _prepareMenu(){var _this=this;// if(!this.options.holdOpen){
//   this._menuLinkEvents();
// }
this.$submenuAnchors.each(function(){var $link=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);var $sub=$link.parent();if(_this.options.parentLink){$link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="none"></li>');}$link.data('savedHref',$link.attr('href')).removeAttr('href').attr('tabindex',0);$link.children('[data-submenu]').attr({'aria-hidden':true,'tabindex':0,'role':'group'});_this._events($link);});this.$submenus.each(function(){var $menu=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$back=$menu.find('.js-drilldown-back');if(!$back.length){switch(_this.options.backButtonPosition){case"bottom":$menu.append(_this.options.backButton);break;case"top":$menu.prepend(_this.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+_this.options.backButtonPosition+"'");}}_this._back($menu);});this.$submenus.addClass('invisible');if(!this.options.autoHeight){this.$submenus.addClass('drilldown-submenu-cover-previous');}// create a wrapper on element if it doesn't exist.
if(!this.$element.parent().hasClass('is-drilldown')){this.$wrapper=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');if(this.options.animateHeight)this.$wrapper.addClass('animate-height');this.$element.wrap(this.$wrapper);}// set wrapper
this.$wrapper=this.$element.parent();this.$wrapper.css(this._getMaxDims());}},{key:"_resize",value:function _resize(){this.$wrapper.css({'max-width':'none','min-height':'none'});// _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
this.$wrapper.css(this._getMaxDims());}/**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */},{key:"_events",value:function _events($elem){var _this=this;$elem.off('click.zf.drilldown').on('click.zf.drilldown',function(e){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul','li').hasClass('is-drilldown-submenu-parent')){e.preventDefault();}// if(e.target !== e.currentTarget.firstElementChild){
//   return false;
// }
_this._show($elem.parent('li'));if(_this.options.closeOnClick){var $body=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');$body.off('.zf.drilldown').on('click.zf.drilldown',function(ev){if(ev.target===_this.$element[0]||jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0],ev.target)){return;}ev.preventDefault();_this._hideAll();$body.off('.zf.drilldown');});}});}/**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */},{key:"_registerEvents",value:function _registerEvents(){if(this.options.scrollTop){this._bindHandler=this._scrollTop.bind(this);this.$element.on('open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown',this._bindHandler);}this.$element.on('mutateme.zf.trigger',this._resize.bind(this));}/**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */},{key:"_scrollTop",value:function _scrollTop(){var _this=this;var $scrollTopElement=_this.options.scrollTopElement!==''?jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement):_this.$element,scrollPos=parseInt($scrollTopElement.offset().top+_this.options.scrollTopOffset,10);jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({scrollTop:scrollPos},_this.options.animationDuration,_this.options.animationEasing,function(){/**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */if(this===jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0])_this.$element.trigger('scrollme.zf.drilldown');});}/**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */},{key:"_keyboardEvents",value:function _keyboardEvents(){var _this=this;this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown',function(e){var $element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$elements=$element.parent('li').parent('ul').children('li').children('a'),$prevElement,$nextElement;$elements.each(function(i){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)){$prevElement=$elements.eq(Math.max(0,i-1));$nextElement=$elements.eq(Math.min(i+1,$elements.length-1));return;}});_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e,'Drilldown',{next:function next(){if($element.is(_this.$submenuAnchors)){_this._show($element.parent('li'));$element.parent('li').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element),function(){$element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();});return true;}},previous:function previous(){_this._hide($element.parent('li').parent('ul'));$element.parent('li').parent('ul').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element),function(){setTimeout(function(){$element.parent('li').parent('ul').parent('li').children('a').first().focus();},1);});return true;},up:function up(){$prevElement.focus();// Don't tap focus on first element in root ul
return!$element.is(_this.$element.find('> li:first-child > a'));},down:function down(){$nextElement.focus();// Don't tap focus on last element in root ul
return!$element.is(_this.$element.find('> li:last-child > a'));},close:function close(){// Don't close on element in root ul
if(!$element.is(_this.$element.find('> li > a'))){_this._hide($element.parent().parent());$element.parent().parent().siblings('a').focus();}},open:function open(){if(_this.options.parentLink&&$element.attr('href')){// Link with href
return false;}else if(!$element.is(_this.$menuItems)){// not menu item means back button
_this._hide($element.parent('li').parent('ul'));$element.parent('li').parent('ul').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element),function(){setTimeout(function(){$element.parent('li').parent('ul').parent('li').children('a').first().focus();},1);});return true;}else if($element.is(_this.$submenuAnchors)){// Sub menu item
_this._show($element.parent('li'));$element.parent('li').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element),function(){$element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();});return true;}},handled:function handled(preventDefault){if(preventDefault){e.preventDefault();}}});});// end keyboardAccess
}/**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#close
     * @fires Drilldown#closed
     */},{key:"_hideAll",value:function _hideAll(){var _this2=this;var $elem=this.$element.find('.is-drilldown-submenu.is-active');$elem.addClass('is-closing');$elem.parent().closest('ul').removeClass('invisible');if(this.options.autoHeight){var calcHeight=$elem.parent().closest('ul').data('calcHeight');this.$wrapper.css({height:calcHeight});}/**
       * Fires when the menu is closing.
       * @event Drilldown#close
       */this.$element.trigger('close.zf.drilldown');$elem.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($elem),function(){$elem.removeClass('is-active is-closing');/**
         * Fires when the menu is fully closed.
         * @event Drilldown#closed
         */_this2.$element.trigger('closed.zf.drilldown');});}/**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */},{key:"_back",value:function _back($elem){var _this=this;$elem.off('click.zf.drilldown');$elem.children('.js-drilldown-back').on('click.zf.drilldown',function(){_this._hide($elem);// If there is a parent submenu, call show
var parentSubMenu=$elem.parent('li').parent('ul').parent('li');if(parentSubMenu.length){_this._show(parentSubMenu);}else{_this.$currentMenu=_this.$element;}});}/**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */},{key:"_menuLinkEvents",value:function _menuLinkEvents(){var _this=this;this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown',function(){setTimeout(function(){_this._hideAll();},0);});}/**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setShowSubMenuClasses",value:function _setShowSubMenuClasses($elem,trigger){$elem.addClass('is-active').removeClass('invisible').attr('aria-hidden',false);$elem.parent('li').attr('aria-expanded',true);if(trigger===true){this.$element.trigger('open.zf.drilldown',[$elem]);}}/**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setHideSubMenuClasses",value:function _setHideSubMenuClasses($elem,trigger){$elem.removeClass('is-active').addClass('invisible').attr('aria-hidden',true);$elem.parent('li').attr('aria-expanded',false);if(trigger===true){$elem.trigger('hide.zf.drilldown',[$elem]);}}/**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */},{key:"_showMenu",value:function _showMenu($elem,autoFocus){var _this=this;// Reset drilldown
var $expandedSubmenus=this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');$expandedSubmenus.each(function(){_this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));});// Save the menu as the currently displayed one.
this.$currentMenu=$elem;// If target menu is root, focus first link & exit
if($elem.is('[data-drilldown]')){if(autoFocus===true)$elem.find('li > a').first().focus();if(this.options.autoHeight)this.$wrapper.css('height',$elem.data('calcHeight'));return;}// Find all submenus on way to root incl. the element itself
var $submenus=$elem.children().first().parentsUntil('[data-drilldown]','[data-submenu]');// Open target menu and all submenus on its way to root
$submenus.each(function(index){// Update height of first child (target menu) if autoHeight option true
if(index===0&&_this.options.autoHeight){_this.$wrapper.css('height',jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));}var isLastChild=index===$submenus.length-1;// Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
// Last child makes sure the event gets always triggered even if going through several menus
if(isLastChild===true){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)),function(){if(autoFocus===true){$elem.find('li > a').first().focus();}});}_this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),isLastChild);});}/**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */},{key:"_show",value:function _show($elem){var $submenu=$elem.children('[data-submenu]');$elem.attr('aria-expanded',true);this.$currentMenu=$submenu;//hide drilldown parent menu when submenu is open
// this removes it from the dom so that the tab key will take the user to the next visible element
$elem.parent().closest('ul').addClass('invisible');// add visible class to submenu to override invisible class above
$submenu.addClass('is-active visible').removeClass('invisible').attr('aria-hidden',false);if(this.options.autoHeight){this.$wrapper.css({height:$submenu.data('calcHeight')});}/**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */this.$element.trigger('open.zf.drilldown',[$elem]);}/**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */},{key:"_hide",value:function _hide($elem){if(this.options.autoHeight)this.$wrapper.css({height:$elem.parent().closest('ul').data('calcHeight')});$elem.parent().closest('ul').removeClass('invisible');$elem.parent('li').attr('aria-expanded',false);$elem.attr('aria-hidden',true);$elem.addClass('is-closing').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($elem),function(){$elem.removeClass('is-active is-closing visible');$elem.blur().addClass('invisible');});/**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */$elem.trigger('hide.zf.drilldown',[$elem]);}/**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */},{key:"_getMaxDims",value:function _getMaxDims(){var maxHeight=0,result={},_this=this;// Recalculate menu heights and total max height
this.$submenus.add(this.$element).each(function(){var height=_foundation_util_box__WEBPACK_IMPORTED_MODULE_4__.Box.GetDimensions(this).height;maxHeight=height>maxHeight?height:maxHeight;if(_this.options.autoHeight){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight',height);}});if(this.options.autoHeight)result.height=this.$currentMenu.data('calcHeight');else result['min-height']="".concat(maxHeight,"px");result['max-width']="".concat(this.$element[0].getBoundingClientRect().width,"px");return result;}/**
     * Destroys the Drilldown Menu
     * @function
     */},{key:"_destroy",value:function _destroy(){jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('.zf.drilldown');if(this.options.scrollTop)this.$element.off('.zf.drilldown',this._bindHandler);this._hideAll();this.$element.off('mutateme.zf.trigger');_foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Burn(this.$element,'drilldown');this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').off('transitionend otransitionend webkitTransitionEnd').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');this.$submenuAnchors.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');});this.$element.find('[data-is-parent-link]').detach();this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');this.$element.find('a').each(function(){var $link=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);$link.removeAttr('tabindex');if($link.data('savedHref')){$link.attr('href',$link.data('savedHref')).removeData('savedHref');}else{return;}});}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__.Plugin);_Drilldown.defaults={/**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolean}
   * @default true
   */autoApplyClass:true,/**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',/**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */backButtonPosition:'top',/**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */wrapper:'<div></div>',/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */parentLink:false,/**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */closeOnClick:false,/**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */autoHeight:false,/**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */animateHeight:false,/**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */scrollTop:false,/**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */scrollTopElement:'',/**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */scrollTopOffset:0,/**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */animationDuration:500,/**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */animationEasing:'swing'// holdOpen: false
};/***/}),/***/"./js/foundation.dropdown.js":(/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************//***/function _js_foundationDropdownJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Dropdown:function Dropdown(){return/* binding */_Dropdown;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.positionable */"./js/foundation.positionable.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");/* harmony import */var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.util.touch */"./js/foundation.util.touch.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _superPropGet(t,e,o,r){var p=_get(_getPrototypeOf(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t);}:p;}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var p=_superPropBase(e,t);if(p){var n=Object.getOwnPropertyDescriptor(p,t);return n.get?n.get.call(arguments.length<3?e:r):n.value;}},_get.apply(null,arguments);}function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=_getPrototypeOf(t)););return t;}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.touch
 * @requires foundation.util.triggers
 */var _Dropdown=/*#__PURE__*/function(_Positionable){function Dropdown(){_classCallCheck(this,Dropdown);return _callSuper(this,Dropdown,arguments);}_inherits(Dropdown,_Positionable);return _createClass(Dropdown,[{key:"_setup",value:/**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Dropdown.defaults,this.$element.data(),options);this.className='Dropdown';// ie9 back compat
// Touch and Triggers init are idempotent, just need to make sure they are initialized
_foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__.Touch.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Dropdown',{'ENTER':'toggle','SPACE':'toggle','ESCAPE':'close'});}/**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */},{key:"_init",value:function _init(){var $id=this.$element.attr('id');this.$anchors=jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id,"\"]")).length?jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id,"\"]")):jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat($id,"\"]"));this.$anchors.attr({'aria-controls':$id,'data-is-focus':false,'data-yeti-box':$id,'aria-haspopup':true,'aria-expanded':false});this._setCurrentAnchor(this.$anchors.first());if(this.options.parentClass){this.$parent=this.$element.parents('.'+this.options.parentClass);}else{this.$parent=null;}// Set [aria-labelledby] on the Dropdown if it is not set
if(typeof this.$element.attr('aria-labelledby')==='undefined'){// Get the anchor ID or create one
if(typeof this.$currentAnchor.attr('id')==='undefined'){this.$currentAnchor.attr('id',(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'dd-anchor'));}this.$element.attr('aria-labelledby',this.$currentAnchor.attr('id'));}this.$element.attr({'aria-hidden':'true','data-yeti-box':$id,'data-resize':$id});_superPropGet(Dropdown,"_init",this,3)([]);this._events();}},{key:"_getDefaultPosition",value:function _getDefaultPosition(){// handle legacy classnames
var position=this.$element[0].className.match(/(top|left|right|bottom)/g);if(position){return position[0];}else{return'bottom';}}},{key:"_getDefaultAlignment",value:function _getDefaultAlignment(){// handle legacy float approach
var horizontalPosition=/float-(\S+)/.exec(this.$currentAnchor.attr('class'));if(horizontalPosition){return horizontalPosition[1];}return _superPropGet(Dropdown,"_getDefaultAlignment",this,3)([]);}/**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */},{key:"_setPosition",value:function _setPosition(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment));_superPropGet(Dropdown,"_setPosition",this,3)([this.$currentAnchor,this.$element,this.$parent]);this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment));}/**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */},{key:"_setCurrentAnchor",value:function _setCurrentAnchor(el){this.$currentAnchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);}/**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */},{key:"_events",value:function _events(){var _this=this,hasTouch='ontouchstart'in window||typeof window.ontouchstart!=='undefined';this.$element.on({'open.zf.trigger':this.open.bind(this),'close.zf.trigger':this.close.bind(this),'toggle.zf.trigger':this.toggle.bind(this),'resizeme.zf.trigger':this._setPosition.bind(this)});this.$anchors.off('click.zf.trigger').on('click.zf.trigger',function(e){_this._setCurrentAnchor(this);if(// if forceFollow false, always prevent default action
_this.options.forceFollow===false||// if forceFollow true and hover option true, only prevent default action on 1st click
// on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed
hasTouch&&_this.options.hover&&_this.$element.hasClass('is-open')===false){e.preventDefault();}});if(this.options.hover){this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown',function(){_this._setCurrentAnchor(this);var bodyData=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();if(typeof bodyData.whatinput==='undefined'||bodyData.whatinput==='mouse'){clearTimeout(_this.timeout);_this.timeout=setTimeout(function(){_this.open();_this.$anchors.data('hover',true);},_this.options.hoverDelay);}}).on('mouseleave.zf.dropdown',(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.ignoreMousedisappear)(function(){clearTimeout(_this.timeout);_this.timeout=setTimeout(function(){_this.close();_this.$anchors.data('hover',false);},_this.options.hoverDelay);}));if(this.options.hoverPane){this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown',function(){clearTimeout(_this.timeout);}).on('mouseleave.zf.dropdown',(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.ignoreMousedisappear)(function(){clearTimeout(_this.timeout);_this.timeout=setTimeout(function(){_this.close();_this.$anchors.data('hover',false);},_this.options.hoverDelay);}));}}this.$anchors.add(this.$element).on('keydown.zf.dropdown',function(e){var $target=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e,'Dropdown',{open:function open(){if($target.is(_this.$anchors)&&!$target.is('input, textarea')){_this.open();_this.$element.attr('tabindex',-1).focus();e.preventDefault();}},close:function close(){_this.close();_this.$anchors.focus();}});});}/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function _addBodyHandler(){var $body=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),_this=this;$body.off('click.zf.dropdown tap.zf.dropdown').on('click.zf.dropdown tap.zf.dropdown',function(e){if(_this.$anchors.is(e.target)||_this.$anchors.find(e.target).length){return;}if(_this.$element.is(e.target)||_this.$element.find(e.target).length){return;}_this.close();$body.off('click.zf.dropdown tap.zf.dropdown');});}/**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */},{key:"open",value:function open(){// var _this = this;
/**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */this.$element.trigger('closeme.zf.dropdown',this.$element.attr('id'));this.$anchors.addClass('hover').attr({'aria-expanded':true});// this.$element/*.show()*/;
this.$element.addClass('is-opening');this._setPosition();this.$element.removeClass('is-opening').addClass('is-open').attr({'aria-hidden':false});if(this.options.autoFocus){var $focusable=_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.findFocusable(this.$element);if($focusable.length){$focusable.eq(0).focus();}}if(this.options.closeOnClick){this._addBodyHandler();}if(this.options.trapFocus){_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.trapFocus(this.$element);}/**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */this.$element.trigger('show.zf.dropdown',[this.$element]);}/**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */},{key:"close",value:function close(){if(!this.$element.hasClass('is-open')){return false;}this.$element.removeClass('is-open').attr({'aria-hidden':true});this.$anchors.removeClass('hover').attr('aria-expanded',false);/**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */this.$element.trigger('hide.zf.dropdown',[this.$element]);if(this.options.trapFocus){_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.releaseFocus(this.$element);}}/**
     * Toggles the dropdown pane's visibility.
     * @function
     */},{key:"toggle",value:function toggle(){if(this.$element.hasClass('is-open')){if(this.$anchors.data('hover'))return;this.close();}else{this.open();}}/**
     * Destroys the dropdown.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$element.off('.zf.trigger').hide();this.$anchors.off('.zf.dropdown');jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown tap.zf.dropdown');}}]);}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__.Positionable);_Dropdown.defaults={/**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */parentClass:null,/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */hoverDelay:250,/**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */hover:false,/**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */hoverPane:false,/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */vOffset:0,/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */hOffset:0,/**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */position:'auto',/**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */alignment:'auto',/**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */allowOverlap:false,/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */allowBottomOverlap:true,/**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */trapFocus:false,/**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */autoFocus:false,/**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */closeOnClick:false,/**
   * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.
   * @option
   * @type {boolean}
   * @default true
   */forceFollow:true};/***/}),/***/"./js/foundation.dropdownMenu.js":(/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************//***/function _js_foundationDropdownMenuJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */DropdownMenu:function DropdownMenu(){return/* binding */_DropdownMenu;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.nest */"./js/foundation.util.nest.js");/* harmony import */var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.util.box */"./js/foundation.util.box.js");/* harmony import */var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./foundation.util.touch */"./js/foundation.util.touch.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * DropdownMenu module.
 * @module foundation.dropdownMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 * @requires foundation.util.touch
 */var _DropdownMenu=/*#__PURE__*/function(_Plugin){function DropdownMenu(){_classCallCheck(this,DropdownMenu);return _callSuper(this,DropdownMenu,arguments);}_inherits(DropdownMenu,_Plugin);return _createClass(DropdownMenu,[{key:"_setup",value:/**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},DropdownMenu.defaults,this.$element.data(),options);this.className='DropdownMenu';// ie9 back compat
_foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__.Touch.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());// Touch init is idempotent, we just need to make sure it's initialied.
this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('DropdownMenu',{'ENTER':'open','SPACE':'open','ARROW_RIGHT':'next','ARROW_UP':'up','ARROW_DOWN':'down','ARROW_LEFT':'previous','ESCAPE':'close'});}/**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */},{key:"_init",value:function _init(){_foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__.Nest.Feather(this.$element,'dropdown');var subs=this.$element.find('li.is-dropdown-submenu-parent');this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');this.$menuItems=this.$element.find('li[role="none"]');this.$tabs=this.$element.children('li[role="none"]');this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);if(this.options.alignment==='auto'){if(this.$element.hasClass(this.options.rightClass)||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl)()||this.$element.parents('.top-bar-right').is('*')){this.options.alignment='right';subs.addClass('opens-left');}else{this.options.alignment='left';subs.addClass('opens-right');}}else{if(this.options.alignment==='right'){subs.addClass('opens-left');}else{subs.addClass('opens-right');}}this.changed=false;this._events();}},{key:"_isVertical",value:function _isVertical(){return this.$tabs.css('display')==='block'||this.$element.css('flex-direction')==='column';}},{key:"_isRtl",value:function _isRtl(){return this.$element.hasClass('align-right')||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl)()&&!this.$element.hasClass('align-left');}/**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */},{key:"_events",value:function _events(){var _this=this,hasTouch='ontouchstart'in window||typeof window.ontouchstart!=='undefined',parClass='is-dropdown-submenu-parent';// used for onClick and in the keyboard handlers
var handleClickFn=function handleClickFn(e){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul',".".concat(parClass)),hasSub=$elem.hasClass(parClass),hasClicked=$elem.attr('data-is-click')==='true',$sub=$elem.children('.is-dropdown-submenu');if(hasSub){if(hasClicked){if(!_this.options.closeOnClick||!_this.options.clickOpen&&!hasTouch||_this.options.forceFollow&&hasTouch){return;}e.stopImmediatePropagation();e.preventDefault();_this._hide($elem);}else{e.stopImmediatePropagation();e.preventDefault();_this._show($sub);$elem.add($elem.parentsUntil(_this.$element,".".concat(parClass))).attr('data-is-click',true);}}};if(this.options.clickOpen||hasTouch){this.$menuItems.on('click.zf.dropdownMenu touchstart.zf.dropdownMenu',handleClickFn);}// Handle Leaf element Clicks
if(_this.options.closeOnClickInside){this.$menuItems.on('click.zf.dropdownMenu',function(){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),hasSub=$elem.hasClass(parClass);if(!hasSub){_this._hide();}});}if(hasTouch&&this.options.disableHoverOnTouch)this.options.disableHover=true;if(!this.options.disableHover){this.$menuItems.on('mouseenter.zf.dropdownMenu',function(){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),hasSub=$elem.hasClass(parClass);if(hasSub){clearTimeout($elem.data('_delay'));$elem.data('_delay',setTimeout(function(){_this._show($elem.children('.is-dropdown-submenu'));},_this.options.hoverDelay));}}).on('mouseleave.zf.dropdownMenu',(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.ignoreMousedisappear)(function(){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),hasSub=$elem.hasClass(parClass);if(hasSub&&_this.options.autoclose){if($elem.attr('data-is-click')==='true'&&_this.options.clickOpen){return false;}clearTimeout($elem.data('_delay'));$elem.data('_delay',setTimeout(function(){_this._hide($elem);},_this.options.closingTime));}}));}this.$menuItems.on('keydown.zf.dropdownMenu',function(e){var $element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul','[role="none"]'),isTab=_this.$tabs.index($element)>-1,$elements=isTab?_this.$tabs:$element.siblings('li').add($element),$prevElement,$nextElement;$elements.each(function(i){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)){$prevElement=$elements.eq(i-1);$nextElement=$elements.eq(i+1);return;}});var nextSibling=function nextSibling(){$nextElement.children('a:first').focus();e.preventDefault();},prevSibling=function prevSibling(){$prevElement.children('a:first').focus();e.preventDefault();},openSub=function openSub(){var $sub=$element.children('ul.is-dropdown-submenu');if($sub.length){_this._show($sub);$element.find('li > a:first').focus();e.preventDefault();}else{return;}},closeSub=function closeSub(){//if ($element.is(':first-child')) {
var close=$element.parent('ul').parent('li');close.children('a:first').focus();_this._hide(close);e.preventDefault();//}
};var functions={open:openSub,close:function close(){_this._hide(_this.$element);_this.$menuItems.eq(0).children('a').focus();// focus to first element
e.preventDefault();}};if(isTab){if(_this._isVertical()){// vertical menu
if(_this._isRtl()){// right aligned
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions,{down:nextSibling,up:prevSibling,next:closeSub,previous:openSub});}else{// left aligned
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions,{down:nextSibling,up:prevSibling,next:openSub,previous:closeSub});}}else{// horizontal menu
if(_this._isRtl()){// right aligned
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions,{next:prevSibling,previous:nextSibling,down:openSub,up:closeSub});}else{// left aligned
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions,{next:nextSibling,previous:prevSibling,down:openSub,up:closeSub});}}}else{// not tabs -> one sub
if(_this._isRtl()){// right aligned
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions,{next:closeSub,previous:openSub,down:nextSibling,up:prevSibling});}else{// left aligned
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions,{next:openSub,previous:closeSub,down:nextSibling,up:prevSibling});}}_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e,'DropdownMenu',functions);});}/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function _addBodyHandler(){var _this2=this;var $body=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);this._removeBodyHandler();$body.on('click.zf.dropdownMenu tap.zf.dropdownMenu',function(e){var isItself=!!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(_this2.$element).length;if(isItself)return;_this2._hide();_this2._removeBodyHandler();});}/**
     * Remove the body event handler. See `_addBodyHandler`.
     * @function
     * @private
     */},{key:"_removeBodyHandler",value:function _removeBodyHandler(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdownMenu tap.zf.dropdownMenu');}/**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */},{key:"_show",value:function _show($sub){var idx=this.$tabs.index(this.$tabs.filter(function(i,el){return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length>0;}));var $sibs=$sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');this._hide($sibs,idx);$sub.css('visibility','hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');var clear=_foundation_util_box__WEBPACK_IMPORTED_MODULE_5__.Box.ImNotTouchingYou($sub,null,true);if(!clear){var oldClass=this.options.alignment==='left'?'-right':'-left',$parentLi=$sub.parent('.is-dropdown-submenu-parent');$parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));clear=_foundation_util_box__WEBPACK_IMPORTED_MODULE_5__.Box.ImNotTouchingYou($sub,null,true);if(!clear){$parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');}this.changed=true;}$sub.css('visibility','');if(this.options.closeOnClick){this._addBodyHandler();}/**
       * Fires when the new dropdown pane is visible.
       * @event DropdownMenu#show
       */this.$element.trigger('show.zf.dropdownMenu',[$sub]);}/**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @fires DropdownMenu#hide
     * @private
     */},{key:"_hide",value:function _hide($elem,idx){var $toClose;if($elem&&$elem.length){$toClose=$elem;}else if(typeof idx!=='undefined'){$toClose=this.$tabs.not(function(i){return i===idx;});}else{$toClose=this.$element;}var somethingToClose=$toClose.hasClass('is-active')||$toClose.find('.is-active').length>0;if(somethingToClose){var $activeItem=$toClose.find('li.is-active');$activeItem.add($toClose).attr({'data-is-click':false}).removeClass('is-active');$toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');if(this.changed||$toClose.find('opens-inner').length){var oldClass=this.options.alignment==='left'?'right':'left';$toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));this.changed=false;}clearTimeout($activeItem.data('_delay'));this._removeBodyHandler();/**
         * Fires when the open menus are closed.
         * @event DropdownMenu#hide
         */this.$element.trigger('hide.zf.dropdownMenu',[$toClose]);}}/**
     * Destroys the plugin.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$menuItems.off('.zf.dropdownMenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownMenu');_foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__.Nest.Burn(this.$element,'dropdown');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);/**
 * Default settings for plugin
 */_DropdownMenu.defaults={/**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */disableHover:false,/**
   * Disallows hover on touch devices
   * @option
   * @type {boolean}
   * @default true
   */disableHoverOnTouch:true,/**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */autoclose:true,/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */hoverDelay:50,/**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */clickOpen:false,/**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */closingTime:500,/**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */alignment:'auto',/**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */closeOnClick:true,/**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */closeOnClickInside:true,/**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */verticalClass:'vertical',/**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */rightClass:'align-right',/**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */forceFollow:true};/***/}),/***/"./js/foundation.equalizer.js":(/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************//***/function _js_foundationEqualizerJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Equalizer:function Equalizer(){return/* binding */_Equalizer;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */var _Equalizer=/*#__PURE__*/function(_Plugin){function Equalizer(){_classCallCheck(this,Equalizer);return _callSuper(this,Equalizer,arguments);}_inherits(Equalizer,_Plugin);return _createClass(Equalizer,[{key:"_setup",value:/**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Equalizer.defaults,this.$element.data(),options);this.className='Equalizer';// ie9 back compat
this._init();}/**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function _init(){var eqId=this.$element.attr('data-equalizer')||'';var $watched=this.$element.find("[data-equalizer-watch=\"".concat(eqId,"\"]"));_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();this.$watched=$watched.length?$watched:this.$element.find('[data-equalizer-watch]');this.$element.attr('data-resize',eqId||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'eq'));this.$element.attr('data-mutate',eqId||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'eq'));this.hasNested=this.$element.find('[data-equalizer]').length>0;this.isNested=this.$element.parentsUntil(document.body,'[data-equalizer]').length>0;this.isOn=false;this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var imgs=this.$element.find('img');var tooSmall;if(this.options.equalizeOn){tooSmall=this._checkMQ();jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',this._checkMQ.bind(this));}else{this._events();}if(typeof tooSmall!=='undefined'&&tooSmall===false||typeof tooSmall==='undefined'){if(imgs.length){(0,_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__.onImagesLoaded)(imgs,this._reflow.bind(this));}else{this._reflow();}}}/**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */},{key:"_pauseEvents",value:function _pauseEvents(){this.isOn=false;this.$element.off({'.zf.equalizer':this._bindHandler.onPostEqualizedBound,'resizeme.zf.trigger':this._bindHandler.onResizeMeBound,'mutateme.zf.trigger':this._bindHandler.onResizeMeBound});}/**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */},{key:"_onResizeMe",value:function _onResizeMe(){this._reflow();}/**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */},{key:"_onPostEqualized",value:function _onPostEqualized(e){if(e.target!==this.$element[0]){this._reflow();}}/**
     * Initializes events for Equalizer.
     * @private
     */},{key:"_events",value:function _events(){this._pauseEvents();if(this.hasNested){this.$element.on('postequalized.zf.equalizer',this._bindHandler.onPostEqualizedBound);}else{this.$element.on('resizeme.zf.trigger',this._bindHandler.onResizeMeBound);this.$element.on('mutateme.zf.trigger',this._bindHandler.onResizeMeBound);}this.isOn=true;}/**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */},{key:"_checkMQ",value:function _checkMQ(){var tooSmall=!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.is(this.options.equalizeOn);if(tooSmall){if(this.isOn){this._pauseEvents();this.$watched.css('height','auto');}}else{if(!this.isOn){this._events();}}return tooSmall;}/**
     * A noop version for the plugin
     * @private
     */},{key:"_killswitch",value:function _killswitch(){return;}/**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */},{key:"_reflow",value:function _reflow(){if(!this.options.equalizeOnStack){if(this._isStacked()){this.$watched.css('height','auto');return false;}}if(this.options.equalizeByRow){this.getHeightsByRow(this.applyHeightByRow.bind(this));}else{this.getHeights(this.applyHeight.bind(this));}}/**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */},{key:"_isStacked",value:function _isStacked(){if(!this.$watched[0]||!this.$watched[1]){return true;}return this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top;}/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */},{key:"getHeights",value:function getHeights(cb){var heights=[];for(var i=0,len=this.$watched.length;i<len;i++){this.$watched[i].style.height='auto';heights.push(this.$watched[i].offsetHeight);}cb(heights);}/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */},{key:"getHeightsByRow",value:function getHeightsByRow(cb){var lastElTopOffset=this.$watched.length?this.$watched.first().offset().top:0,groups=[],group=0;//group by Row
groups[group]=[];for(var i=0,len=this.$watched.length;i<len;i++){this.$watched[i].style.height='auto';//maybe could use this.$watched[i].offsetTop
var elOffsetTop=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;if(elOffsetTop!==lastElTopOffset){group++;groups[group]=[];lastElTopOffset=elOffsetTop;}groups[group].push([this.$watched[i],this.$watched[i].offsetHeight]);}for(var j=0,ln=groups.length;j<ln;j++){var heights=jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function(){return this[1];}).get();var max=Math.max.apply(null,heights);groups[j].push(max);}cb(groups);}/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */},{key:"applyHeight",value:function applyHeight(heights){var max=Math.max.apply(null,heights);/**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */this.$element.trigger('preequalized.zf.equalizer');this.$watched.css('height',max);/**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */this.$element.trigger('postequalized.zf.equalizer');}/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */},{key:"applyHeightByRow",value:function applyHeightByRow(groups){/**
       * Fires before the heights are applied
       */this.$element.trigger('preequalized.zf.equalizer');for(var i=0,len=groups.length;i<len;i++){var groupsILength=groups[i].length,max=groups[i][groupsILength-1];if(groupsILength<=2){jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({'height':'auto'});continue;}/**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */this.$element.trigger('preequalizedrow.zf.equalizer');for(var j=0,lenJ=groupsILength-1;j<lenJ;j++){jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({'height':max});}/**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */this.$element.trigger('postequalizedrow.zf.equalizer');}/**
       * Fires when the heights have been applied
       */this.$element.trigger('postequalized.zf.equalizer');}/**
     * Destroys an instance of Equalizer.
     * @function
     */},{key:"_destroy",value:function _destroy(){this._pauseEvents();this.$watched.css('height','auto');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin);/**
 * Default settings for plugin
 */_Equalizer.defaults={/**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */equalizeOnStack:false,/**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */equalizeByRow:false,/**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */equalizeOn:''};/***/}),/***/"./js/foundation.interchange.js":(/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************//***/function _js_foundationInterchangeJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Interchange:function Interchange(){return/* binding */_Interchange;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */var _Interchange=/*#__PURE__*/function(_Plugin){function Interchange(){_classCallCheck(this,Interchange);return _callSuper(this,Interchange,arguments);}_inherits(Interchange,_Plugin);return _createClass(Interchange,[{key:"_setup",value:/**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Interchange.defaults,this.$element.data(),options);this.rules=[];this.currentPath='';this.className='Interchange';// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();this._events();}/**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();var id=this.$element[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'interchange');this.$element.attr({'data-resize':id,'id':id});this._parseOptions();this._addBreakpoints();this._generateRules();this._reflow();}/**
     * Initializes events for Interchange.
     * @function
     * @private
     */},{key:"_events",value:function _events(){var _this=this;this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger',function(){return _this._reflow();});}/**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */},{key:"_reflow",value:function _reflow(){var match;// Iterate through each rule, but only save the last match
for(var i in this.rules){if(this.rules.hasOwnProperty(i)){var rule=this.rules[i];if(window.matchMedia(rule.query).matches){match=rule;}}}if(match){this.replace(match.path);}}/**
     * Check options valifity and set defaults for:
     * - `data-interchange-type`: if set, enforce the type of replacement (auto, src, background or html)
     * @function
     * @private
     */},{key:"_parseOptions",value:function _parseOptions(){var types=['auto','src','background','html'];if(typeof this.options.type==='undefined')this.options.type='auto';else if(types.indexOf(this.options.type)===-1){console.warn("Warning: invalid value \"".concat(this.options.type,"\" for Interchange option \"type\""));this.options.type='auto';}}/**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */},{key:"_addBreakpoints",value:function _addBreakpoints(){for(var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.queries){if(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.queries.hasOwnProperty(i)){var query=_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.queries[i];Interchange.SPECIAL_QUERIES[query.name]=query.value;}}}/**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */},{key:"_generateRules",value:function _generateRules(){var rulesList=[];var rules;if(this.options.rules){rules=this.options.rules;}else{rules=this.$element.data('interchange');}rules=typeof rules==='string'?rules.match(/\[.*?, .*?\]/g):rules;for(var i in rules){if(rules.hasOwnProperty(i)){var rule=rules[i].slice(1,-1).split(', ');var path=rule.slice(0,-1).join('');var query=rule[rule.length-1];if(Interchange.SPECIAL_QUERIES[query]){query=Interchange.SPECIAL_QUERIES[query];}rulesList.push({path:path,query:query});}}this.rules=rulesList;}/**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */},{key:"replace",value:function replace(path){var _this2=this;if(this.currentPath===path)return;var trigger='replaced.zf.interchange';var type=this.options.type;if(type==='auto'){if(this.$element[0].nodeName==='IMG')type='src';else if(path.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i))type='background';else type='html';}// Replacing images
if(type==='src'){this.$element.attr('src',path).on('load',function(){_this2.currentPath=path;}).trigger(trigger);}// Replacing background images
else if(type==='background'){path=path.replace(/\(/g,'%28').replace(/\)/g,'%29');this.$element.css({'background-image':'url('+path+')'}).trigger(trigger);}// Replacing HTML
else if(type==='html'){jquery__WEBPACK_IMPORTED_MODULE_0___default().get(path,function(response){_this2.$element.html(response).trigger(trigger);jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();_this2.currentPath=path;});}/**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */// this.$element.trigger('replaced.zf.interchange');
}/**
     * Destroys an instance of interchange.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$element.off('resizeme.zf.trigger');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__.Plugin);/**
 * Default settings for plugin
 */_Interchange.defaults={/**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */rules:null,/**
   * Type of the responsive ressource to replace. It can take the following options:
   * - `auto` (default): choose the type according to the element tag or the ressource extension,
   * - `src`: replace the `[src]` attribute, recommended for images `<img>`.
   * - `background`: replace the `background-image` CSS property.
   * - `html`: replace the element content.
   * @option
   * @type {string}
   * @default 'auto'
   */type:'auto'};_Interchange.SPECIAL_QUERIES={'landscape':'screen and (orientation: landscape)','portrait':'screen and (orientation: portrait)','retina':'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'};/***/}),/***/"./js/foundation.magellan.js":(/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************//***/function _js_foundationMagellanJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Magellan:function Magellan(){return/* binding */_Magellan;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.smoothScroll */"./js/foundation.smoothScroll.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 * @requires foundation.util.triggers
 */var _Magellan=/*#__PURE__*/function(_Plugin){function Magellan(){_classCallCheck(this,Magellan);return _callSuper(this,Magellan,arguments);}_inherits(Magellan,_Plugin);return _createClass(Magellan,[{key:"_setup",value:/**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Magellan.defaults,this.$element.data(),options);this.className='Magellan';// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();this.calcPoints();}/**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function _init(){var id=this.$element[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'magellan');this.$targets=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');this.$links=this.$element.find('a');this.$element.attr({'data-resize':id,'data-scroll':id,'id':id});this.$active=jquery__WEBPACK_IMPORTED_MODULE_0___default()();this.scrollPos=parseInt(window.pageYOffset,10);this._events();}/**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */},{key:"calcPoints",value:function calcPoints(){var _this=this,body=document.body,html=document.documentElement;this.points=[];this.winHeight=Math.round(Math.max(window.innerHeight,html.clientHeight));this.docHeight=Math.round(Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight));this.$targets.each(function(){var $tar=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),pt=Math.round($tar.offset().top-_this.options.threshold);$tar.targetPoint=pt;_this.points.push(pt);});}/**
     * Initializes events for Magellan.
     * @private
     */},{key:"_events",value:function _events(){var _this=this;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load',function(){if(_this.options.deepLinking){if(location.hash){_this.scrollToLoc(location.hash);}}_this.calcPoints();_this._updateActive();});_this.onLoadListener=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){_this.$element.on({'resizeme.zf.trigger':_this.reflow.bind(_this),'scrollme.zf.trigger':_this._updateActive.bind(_this)}).on('click.zf.magellan','a[href^="#"]',function(e){e.preventDefault();var arrival=this.getAttribute('href');_this.scrollToLoc(arrival);});});this._deepLinkScroll=function(){if(_this.options.deepLinking){_this.scrollToLoc(window.location.hash);}};jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange',this._deepLinkScroll);}/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */},{key:"scrollToLoc",value:function scrollToLoc(loc){this._inTransition=true;var _this=this;var options={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.SmoothScroll.scrollToLoc(loc,options,function(){_this._inTransition=false;});}/**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */},{key:"reflow",value:function reflow(){this.calcPoints();this._updateActive();}/**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */},{key:"_updateActive",value:function _updateActive(/*evt, elem, scrollPos*/){var _this2=this;if(this._inTransition)return;var newScrollPos=parseInt(window.pageYOffset,10);var isScrollingUp=this.scrollPos>newScrollPos;this.scrollPos=newScrollPos;var activeIdx;// Before the first point: no link
if(newScrollPos<this.points[0]-this.options.offset-(isScrollingUp?this.options.threshold:0)){/* do nothing */}// At the bottom of the page: last link
else if(newScrollPos+this.winHeight===this.docHeight){activeIdx=this.points.length-1;}// Otherwhise, use the last visible link
else{var visibleLinks=this.points.filter(function(p){return p-_this2.options.offset-(isScrollingUp?_this2.options.threshold:0)<=newScrollPos;});activeIdx=visibleLinks.length?visibleLinks.length-1:0;}// Get the new active link
var $oldActive=this.$active;var activeHash='';if(typeof activeIdx!=='undefined'){this.$active=this.$links.filter('[href="#'+this.$targets.eq(activeIdx).data('magellan-target')+'"]');if(this.$active.length)activeHash=this.$active[0].getAttribute('href');}else{this.$active=jquery__WEBPACK_IMPORTED_MODULE_0___default()();}var isNewActive=!(!this.$active.length&&!$oldActive.length)&&!this.$active.is($oldActive);var isNewHash=activeHash!==window.location.hash;// Update the active link element
if(isNewActive){$oldActive.removeClass(this.options.activeClass);this.$active.addClass(this.options.activeClass);}// Update the hash (it may have changed with the same active link)
if(this.options.deepLinking&&isNewHash){if(window.history.pushState){// Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
var url=activeHash?activeHash:window.location.pathname+window.location.search;if(this.options.updateHistory){window.history.pushState({},'',url);}else{window.history.replaceState({},'',url);}}else{window.location.hash=activeHash;}}if(isNewActive){/**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */this.$element.trigger('update.zf.magellan',[this.$active]);}}/**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);if(this.options.deepLinking){var hash=this.$active[0].getAttribute('href');window.location.hash.replace(hash,'');}jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange',this._deepLinkScroll);if(this.onLoadListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);/**
 * Default settings for plugin
 */_Magellan.defaults={/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */animationDuration:500,/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */animationEasing:'linear',/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */threshold:50,/**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */activeClass:'is-active',/**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */deepLinking:false,/**
   * Update the browser history with the active link, if deep linking is enabled.
   * @option
   * @type {boolean}
   * @default false
   */updateHistory:false,/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */offset:0};/***/}),/***/"./js/foundation.offcanvas.js":(/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************//***/function _js_foundationOffcanvasJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */OffCanvas:function OffCanvas(){return/* binding */_OffCanvas;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * OffCanvas module.
 * @module foundation.offCanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */var _OffCanvas=/*#__PURE__*/function(_Plugin){function OffCanvas(){_classCallCheck(this,OffCanvas);return _callSuper(this,OffCanvas,arguments);}_inherits(OffCanvas,_Plugin);return _createClass(OffCanvas,[{key:"_setup",value:/**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){var _this2=this;this.className='OffCanvas';// ie9 back compat
this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},OffCanvas.defaults,this.$element.data(),options);this.contentClasses={base:[],reveal:[]};this.$lastTrigger=jquery__WEBPACK_IMPORTED_MODULE_0___default()();this.$triggers=jquery__WEBPACK_IMPORTED_MODULE_0___default()();this.position='left';this.$content=jquery__WEBPACK_IMPORTED_MODULE_0___default()();this.nested=!!this.options.nested;this.$sticky=jquery__WEBPACK_IMPORTED_MODULE_0___default()();this.isInCanvas=false;// Defines the CSS transition/position classes of the off-canvas content container.
jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push','overlap']).each(function(index,val){_this2.contentClasses.base.push('has-transition-'+val);});jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left','right','top','bottom']).each(function(index,val){_this2.contentClasses.base.push('has-position-'+val);_this2.contentClasses.reveal.push('has-reveal-'+val);});// Triggers init is idempotent, just need to make sure it is initialized
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery._init();this._init();this._events();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('OffCanvas',{'ESCAPE':'close'});}/**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */},{key:"_init",value:function _init(){var id=this.$element.attr('id');this.$element.attr('aria-hidden','true');// Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)
if(this.options.contentId){this.$content=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#'+this.options.contentId);}else if(this.$element.siblings('[data-off-canvas-content]').length){this.$content=this.$element.siblings('[data-off-canvas-content]').first();}else{this.$content=this.$element.closest('[data-off-canvas-content]').first();}if(!this.options.contentId){// Assume that the off-canvas element is nested if it isn't a sibling of the content
this.nested=this.$element.siblings('[data-off-canvas-content]').length===0;}else if(this.options.contentId&&this.options.nested===null){// Warning if using content ID without setting the nested option
// Once the element is nested it is required to work properly in this case
console.warn('Remember to use the nested option if using the content ID option!');}if(this.nested===true){// Force transition overlap if nested
this.options.transition='overlap';// Remove appropriate classes if already assigned in markup
this.$element.removeClass('is-transition-push');}this.$element.addClass("is-transition-".concat(this.options.transition," is-closed"));// Find triggers that affect this element and add aria-expanded to them
this.$triggers=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="'+id+'"], [data-close="'+id+'"], [data-toggle="'+id+'"]').attr('aria-expanded','false').attr('aria-controls',id);// Get position by checking for related CSS class
this.position=this.$element.is('.position-left, .position-top, .position-right, .position-bottom')?this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1]:this.position;// Add an overlay over the content if necessary
if(this.options.contentOverlay===true){var overlay=document.createElement('div');var overlayPosition=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position")==='fixed'?'is-overlay-fixed':'is-overlay-absolute';overlay.setAttribute('class','js-off-canvas-overlay '+overlayPosition);this.$overlay=jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);if(overlayPosition==='is-overlay-fixed'){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);}else{this.$content.append(this.$overlay);}}// Get the revealOn option from the class.
var revealOnRegExp=new RegExp((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.RegExpEscape)(this.options.revealClass)+'([^\\s]+)','g');var revealOnClass=revealOnRegExp.exec(this.$element[0].className);if(revealOnClass){this.options.isRevealed=true;this.options.revealOn=this.options.revealOn||revealOnClass[1];}// Ensure the `reveal-on-*` class is set.
if(this.options.isRevealed===true&&this.options.revealOn){this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));this._setMQChecker();}if(this.options.transitionTime){this.$element.css('transition-duration',this.options.transitionTime);}// Find fixed elements that should stay fixed while off-canvas is opened
this.$sticky=this.$content.find('[data-off-canvas-sticky]');if(this.$sticky.length>0&&this.options.transition==='push'){// If there's at least one match force contentScroll:false because the absolute top value doesn't get recalculated on scroll
// Limit to push transition since there's no transform scope for overlap
this.options.contentScroll=false;}var inCanvasFor=this.$element.attr('class').match(/\bin-canvas-for-(\w+)/);if(inCanvasFor&&inCanvasFor.length===2){// Set `inCanvasOn` option if found in-canvas-for-[BREAKPONT] CSS class
this.options.inCanvasOn=inCanvasFor[1];}else if(this.options.inCanvasOn){// Ensure the CSS class is set
this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn));}if(this.options.inCanvasOn){this._checkInCanvas();}// Initally remove all transition/position CSS classes from off-canvas content container.
this._removeContentClasses();}/**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */},{key:"_events",value:function _events(){var _this3=this;this.$element.off('.zf.trigger .zf.offCanvas').on({'open.zf.trigger':this.open.bind(this),'close.zf.trigger':this.close.bind(this),'toggle.zf.trigger':this.toggle.bind(this),'keydown.zf.offCanvas':this._handleKeyboard.bind(this)});if(this.options.closeOnClick===true){var $target=this.options.contentOverlay?this.$overlay:this.$content;$target.on({'click.zf.offCanvas':this.close.bind(this)});}if(this.options.inCanvasOn){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',function(){_this3._checkInCanvas();});}}/**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */},{key:"_setMQChecker",value:function _setMQChecker(){var _this=this;this.onLoadListener=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){if(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.atLeast(_this.options.revealOn)){_this.reveal(true);}});jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',function(){if(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.atLeast(_this.options.revealOn)){_this.reveal(true);}else{_this.reveal(false);}});}/**
     * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly
     * @private
     */},{key:"_checkInCanvas",value:function _checkInCanvas(){this.isInCanvas=_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.atLeast(this.options.inCanvasOn);if(this.isInCanvas===true){this.close();}}/**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_removeContentClasses",value:function _removeContentClasses(hasReveal){if(typeof hasReveal!=='boolean'){this.$content.removeClass(this.contentClasses.base.join(' '));}else if(hasReveal===false){this.$content.removeClass("has-reveal-".concat(this.position));}}/**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_addContentClasses",value:function _addContentClasses(hasReveal){this._removeContentClasses(hasReveal);if(typeof hasReveal!=='boolean'){this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position));}else if(hasReveal===true){this.$content.addClass("has-reveal-".concat(this.position));}}/**
     * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.
     * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.
     * @private
     */},{key:"_fixStickyElements",value:function _fixStickyElements(){this.$sticky.each(function(_,el){var $el=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);// If sticky element is currently fixed, adjust its top value to match absolute position due to transform scope
// Limit to push transition because postion:fixed works without problems for overlap (no transform scope)
if($el.css('position')==='fixed'){// Save current inline styling to restore it if undoing the absolute fixing
var topVal=parseInt($el.css('top'),10);$el.data('offCanvasSticky',{top:topVal});var absoluteTopVal=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop()+topVal;$el.css({top:"".concat(absoluteTopVal,"px"),width:'100%',transition:'none'});}});}/**
     * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.
     * This reverts the changes of _fixStickyElements()
     * @private
     */},{key:"_unfixStickyElements",value:function _unfixStickyElements(){this.$sticky.each(function(_,el){var $el=jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);var stickyData=$el.data('offCanvasSticky');// If sticky element has got data object with prior values (meaning it was originally fixed) restore these values once off-canvas is closed
if(_typeof(stickyData)==='object'){$el.css({top:"".concat(stickyData.top,"px"),width:'',transition:''});$el.data('offCanvasSticky','');}});}/**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */},{key:"reveal",value:function reveal(isRevealed){if(isRevealed){this.close();this.isRevealed=true;this.$element.attr('aria-hidden','false');this.$element.off('open.zf.trigger toggle.zf.trigger');this.$element.removeClass('is-closed');}else{this.isRevealed=false;this.$element.attr('aria-hidden','true');this.$element.off('open.zf.trigger toggle.zf.trigger').on({'open.zf.trigger':this.open.bind(this),'toggle.zf.trigger':this.toggle.bind(this)});this.$element.addClass('is-closed');}this._addContentClasses(isRevealed);}/**
     * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.
     * @function
     * @private
     */},{key:"_stopScrolling",value:function _stopScrolling(){return false;}/**
     * Save current finger y-position
     * @param event
     * @private
     */},{key:"_recordScrollable",value:function _recordScrollable(event){var elem=this;elem.lastY=event.touches[0].pageY;}/**
     * Prevent further scrolling when it hits the edges
     * @param event
     * @private
     */},{key:"_preventDefaultAtEdges",value:function _preventDefaultAtEdges(event){var elem=this;var _this=event.data;var delta=elem.lastY-event.touches[0].pageY;elem.lastY=event.touches[0].pageY;if(!_this._canScroll(delta,elem)){event.preventDefault();}}/**
     * Handle continuous scrolling of scrollbox
     * Don't bubble up to _preventDefaultAtEdges
     * @param event
     * @private
     */},{key:"_scrollboxTouchMoved",value:function _scrollboxTouchMoved(event){var elem=this;var _this=event.data;var parent=elem.closest('[data-off-canvas], [data-off-canvas-scrollbox-outer]');var delta=elem.lastY-event.touches[0].pageY;parent.lastY=elem.lastY=event.touches[0].pageY;event.stopPropagation();if(!_this._canScroll(delta,elem)){if(!_this._canScroll(delta,parent)){event.preventDefault();}else{parent.scrollTop+=delta;}}}/**
     * Detect possibility of scrolling
     * @param delta
     * @param elem
     * @returns boolean
     * @private
     */},{key:"_canScroll",value:function _canScroll(delta,elem){var up=delta<0;var down=delta>0;var allowUp=elem.scrollTop>0;var allowDown=elem.scrollTop<elem.scrollHeight-elem.clientHeight;return up&&allowUp||down&&allowDown;}/**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires OffCanvas#opened
     * @todo also trigger 'open' event?
     */},{key:"open",value:function open(event,trigger){var _this4=this;if(this.$element.hasClass('is-open')||this.isRevealed||this.isInCanvas){return;}var _this=this;if(trigger){this.$lastTrigger=trigger;}if(this.options.forceTo==='top'){window.scrollTo(0,0);}else if(this.options.forceTo==='bottom'){window.scrollTo(0,document.body.scrollHeight);}if(this.options.transitionTime&&this.options.transition!=='overlap'){this.$element.siblings('[data-off-canvas-content]').css('transition-duration',this.options.transitionTime);}else{this.$element.siblings('[data-off-canvas-content]').css('transition-duration','');}this.$element.addClass('is-open').removeClass('is-closed');this.$triggers.attr('aria-expanded','true');this.$element.attr('aria-hidden','false');this.$content.addClass('is-open-'+this.position);// If `contentScroll` is set to false, add class and disable scrolling on touch devices.
if(this.options.contentScroll===false){jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove',this._stopScrolling);this.$element.on('touchstart',this._recordScrollable);this.$element.on('touchmove',this,this._preventDefaultAtEdges);this.$element.on('touchstart','[data-off-canvas-scrollbox]',this._recordScrollable);this.$element.on('touchmove','[data-off-canvas-scrollbox]',this,this._scrollboxTouchMoved);}if(this.options.contentOverlay===true){this.$overlay.addClass('is-visible');}if(this.options.closeOnClick===true&&this.options.contentOverlay===true){this.$overlay.addClass('is-closable');}if(this.options.autoFocus===true){this.$element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend)(this.$element),function(){if(!_this.$element.hasClass('is-open')){return;// exit if prematurely closed
}var canvasFocus=_this.$element.find('[data-autofocus]');if(canvasFocus.length){canvasFocus.eq(0).focus();}else{_this.$element.find('a, button').eq(0).focus();}});}if(this.options.trapFocus===true){this.$content.attr('tabindex','-1');_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.trapFocus(this.$element);}if(this.options.transition==='push'){this._fixStickyElements();}this._addContentClasses();/**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#opened
       */this.$element.trigger('opened.zf.offCanvas');/**
       * Fires when the off-canvas menu open transition is done.
       * @event OffCanvas#openedEnd
       */this.$element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend)(this.$element),function(){_this4.$element.trigger('openedEnd.zf.offCanvas');});}/**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires OffCanvas#close
     * @fires OffCanvas#closed
     */},{key:"close",value:function close(){var _this5=this;if(!this.$element.hasClass('is-open')||this.isRevealed){return;}/**
       * Fires when the off-canvas menu closes.
       * @event OffCanvas#close
       */this.$element.trigger('close.zf.offCanvas');this.$element.removeClass('is-open');this.$element.attr('aria-hidden','true');this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');if(this.options.contentOverlay===true){this.$overlay.removeClass('is-visible');}if(this.options.closeOnClick===true&&this.options.contentOverlay===true){this.$overlay.removeClass('is-closable');}this.$triggers.attr('aria-expanded','false');// Listen to transitionEnd: add class, re-enable scrolling and release focus when done.
this.$element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend)(this.$element),function(){_this5.$element.addClass('is-closed');_this5._removeContentClasses();if(_this5.options.transition==='push'){_this5._unfixStickyElements();}// If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
if(_this5.options.contentScroll===false){jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove',_this5._stopScrolling);_this5.$element.off('touchstart',_this5._recordScrollable);_this5.$element.off('touchmove',_this5._preventDefaultAtEdges);_this5.$element.off('touchstart','[data-off-canvas-scrollbox]',_this5._recordScrollable);_this5.$element.off('touchmove','[data-off-canvas-scrollbox]',_this5._scrollboxTouchMoved);}if(_this5.options.trapFocus===true){_this5.$content.removeAttr('tabindex');_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.releaseFocus(_this5.$element);}/**
         * Fires when the off-canvas menu close transition is done.
         * @event OffCanvas#closed
         */_this5.$element.trigger('closed.zf.offCanvas');});}/**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */},{key:"toggle",value:function toggle(event,trigger){if(this.$element.hasClass('is-open')){this.close(event,trigger);}else{this.open(event,trigger);}}/**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */},{key:"_handleKeyboard",value:function _handleKeyboard(e){var _this6=this;_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e,'OffCanvas',{close:function close(){_this6.close();_this6.$lastTrigger.focus();return true;},handled:function handled(){e.preventDefault();}});}/**
     * Destroys the OffCanvas plugin.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.close();this.$element.off('.zf.trigger .zf.offCanvas');this.$overlay.off('.zf.offCanvas');if(this.onLoadListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);_OffCanvas.defaults={/**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */closeOnClick:true,/**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */contentOverlay:true,/**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */contentId:null,/**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */nested:null,/**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */contentScroll:true,/**
   * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.
   * @option
   * @type {string}
   * @default null
   */transitionTime:null,/**
   * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */transition:'push',/**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */forceTo:null,/**
   * Allow the OffCanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */isRevealed:false,/**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */revealOn:null,/**
   * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.
   * @option
   * @type {?string}
   * @default null
   */inCanvasOn:null,/**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */autoFocus:true,/**
   * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */revealClass:'reveal-for-',/**
   * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */trapFocus:false};/***/}),/***/"./js/foundation.orbit.js":(/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************//***/function _js_foundationOrbitJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Orbit:function Orbit(){return/* binding */_Orbit;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.motion */"./js/foundation.util.motion.js");/* harmony import */var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.timer */"./js/foundation.util.timer.js");/* harmony import */var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./foundation.util.touch */"./js/foundation.util.touch.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */var _Orbit=/*#__PURE__*/function(_Plugin){function Orbit(){_classCallCheck(this,Orbit);return _callSuper(this,Orbit,arguments);}_inherits(Orbit,_Plugin);return _createClass(Orbit,[{key:"_setup",value:/**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Orbit.defaults,this.$element.data(),options);this.className='Orbit';// ie9 back compat
_foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__.Touch.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());// Touch init is idempotent, we just need to make sure it's initialied.
this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Orbit',{'ltr':{'ARROW_RIGHT':'next','ARROW_LEFT':'previous'},'rtl':{'ARROW_LEFT':'next','ARROW_RIGHT':'previous'}});}/**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */},{key:"_init",value:function _init(){// @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
this._reset();this.$wrapper=this.$element.find(".".concat(this.options.containerClass));this.$slides=this.$element.find(".".concat(this.options.slideClass));var $images=this.$element.find('img'),initActive=this.$slides.filter('.is-active'),id=this.$element[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__.GetYoDigits)(6,'orbit');this.$element.attr({'data-resize':id,'id':id});if(!initActive.length){this.$slides.eq(0).addClass('is-active');}if(!this.options.useMUI){this.$slides.addClass('no-motionui');}if($images.length){(0,_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__.onImagesLoaded)($images,this._prepareForOrbit.bind(this));}else{this._prepareForOrbit();//hehe
}if(this.options.bullets){this._loadBullets();}this._events();if(this.options.autoPlay&&this.$slides.length>1){this.geoSync();}if(this.options.accessible){// allow wrapper to be focusable to enable arrow navigation
this.$wrapper.attr('tabindex',0);}}/**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */},{key:"_loadBullets",value:function _loadBullets(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find('button');}/**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */},{key:"geoSync",value:function geoSync(){var _this=this;this.timer=new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__.Timer(this.$element,{duration:this.options.timerDelay,infinite:false},function(){_this.changeSlide(true);});this.timer.start();}/**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */},{key:"_prepareForOrbit",value:function _prepareForOrbit(){this._setWrapperHeight();}/**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */},{key:"_setWrapperHeight",value:function _setWrapperHeight(cb){//rewrite this to `for` loop
var max=0,temp,counter=0,_this=this;this.$slides.each(function(){temp=this.getBoundingClientRect().height;jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide',counter);// hide all slides but the active one
if(!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className)&&_this.$slides.filter('.is-active')[0]!==_this.$slides.eq(counter)[0]){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({'display':'none'});}max=temp>max?temp:max;counter++;});if(counter===this.$slides.length){this.$wrapper.css({'height':max});//only change the wrapper height property once.
if(cb){cb(max);}//fire callback with max height dimension.
}}/**
    * Sets the max-height of each slide.
    * @function
    * @private
    */},{key:"_setSlideHeight",value:function _setSlideHeight(height){this.$slides.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height',height);});}/**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */},{key:"_events",value:function _events(){var _this=this;//***************************************
//**Now using custom event - thanks to:**
//**      Yohai Ararat of Toronto      **
//***************************************
//
this.$element.off('.resizeme.zf.trigger').on({'resizeme.zf.trigger':this._prepareForOrbit.bind(this)});if(this.$slides.length>1){if(this.options.swipe){this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit',function(e){e.preventDefault();_this.changeSlide(true);}).on('swiperight.zf.orbit',function(e){e.preventDefault();_this.changeSlide(false);});}//***************************************
if(this.options.autoPlay){this.$slides.on('click.zf.orbit',function(){_this.$element.data('clickedOn',_this.$element.data('clickedOn')?false:true);_this.timer[_this.$element.data('clickedOn')?'pause':'start']();});if(this.options.pauseOnHover){this.$element.on('mouseenter.zf.orbit',function(){_this.timer.pause();}).on('mouseleave.zf.orbit',function(){if(!_this.$element.data('clickedOn')){_this.timer.start();}});}}if(this.options.navButtons){var $controls=this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass));$controls.attr('tabindex',0)//also need to handle enter/return and spacebar key presses
.on('click.zf.orbit touchend.zf.orbit',function(e){e.preventDefault();_this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));});}if(this.options.bullets){this.$bullets.on('click.zf.orbit touchend.zf.orbit',function(){if(/is-active/g.test(this.className)){return false;}//if this is active, kick out of function.
var idx=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),ltr=idx>_this.$slides.filter('.is-active').data('slide'),$slide=_this.$slides.eq(idx);_this.changeSlide(ltr,$slide,idx);});}if(this.options.accessible){this.$wrapper.add(this.$bullets).on('keydown.zf.orbit',function(e){// handle keyboard event with keyboard util
_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e,'Orbit',{next:function next(){_this.changeSlide(true);},previous:function previous(){_this.changeSlide(false);},handled:function handled(){// if bullet is focused, make sure focus moves
if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)){_this.$bullets.filter('.is-active').focus();}}});});}}}/**
     * Resets Orbit so it can be reinitialized
     */},{key:"_reset",value:function _reset(){// Don't do anything if there are no slides (first run)
if(typeof this.$slides==='undefined'){return;}if(this.$slides.length>1){// Remove old events
this.$element.off('.zf.orbit').find('*').off('.zf.orbit');// Restart timer if autoPlay is enabled
if(this.options.autoPlay){this.timer.restart();}// Reset all sliddes
this.$slides.each(function(el){jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();});// Show the first slide
this.$slides.first().addClass('is-active').show();// Triggers when the slide has finished animating
this.$element.trigger('slidechange.zf.orbit',[this.$slides.first()]);// Select first bullet if bullets are present
if(this.options.bullets){this._updateBullets(0);}}}/**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */},{key:"changeSlide",value:function changeSlide(isLTR,chosenSlide,idx){if(!this.$slides){return;}// Don't freak out if we're in the middle of cleanup
var $curSlide=this.$slides.filter('.is-active').eq(0);if(/mui/g.test($curSlide[0].className)){return false;}//if the slide is currently animating, kick out of the function
var $firstSlide=this.$slides.first(),$lastSlide=this.$slides.last(),dirIn=isLTR?'Right':'Left',dirOut=isLTR?'Left':'Right',_this=this,$newSlide;if(!chosenSlide){//most of the time, this will be auto played or clicked from the navButtons.
$newSlide=isLTR?//if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
this.options.infiniteWrap?$curSlide.next(".".concat(this.options.slideClass)).length?$curSlide.next(".".concat(this.options.slideClass)):$firstSlide:$curSlide.next(".".concat(this.options.slideClass))//pick next slide if moving left to right
:this.options.infiniteWrap?$curSlide.prev(".".concat(this.options.slideClass)).length?$curSlide.prev(".".concat(this.options.slideClass)):$lastSlide:$curSlide.prev(".".concat(this.options.slideClass));//pick prev slide if moving right to left
}else{$newSlide=chosenSlide;}if($newSlide.length){/**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */this.$element.trigger('beforeslidechange.zf.orbit',[$curSlide,$newSlide]);if(this.options.bullets){idx=idx||this.$slides.index($newSlide);//grab index to update bullets
this._updateBullets(idx);}if(this.options.useMUI&&!this.$element.is(':hidden')){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateIn($newSlide.addClass('is-active'),this.options["animInFrom".concat(dirIn)],function(){$newSlide.css({'display':'block'}).attr('aria-live','polite');});_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateOut($curSlide.removeClass('is-active'),this.options["animOutTo".concat(dirOut)],function(){$curSlide.removeAttr('aria-live');if(_this.options.autoPlay&&!_this.timer.isPaused){_this.timer.restart();}//do stuff?
});}else{$curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();$newSlide.addClass('is-active is-in').attr('aria-live','polite').show();if(this.options.autoPlay&&!this.timer.isPaused){this.timer.restart();}}/**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */this.$element.trigger('slidechange.zf.orbit',[$newSlide]);}}/**
    * Updates the active state of the bullets, if displayed.
    * Move the descriptor of the current slide `[data-slide-active-label]` to the newly active bullet.
    * If no `[data-slide-active-label]` is set, will move the exceeding `span` element.
    *
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */},{key:"_updateBullets",value:function _updateBullets(idx){var $oldBullet=this.$bullets.filter('.is-active');var $othersBullets=this.$bullets.not('.is-active');var $newBullet=this.$bullets.eq(idx);$oldBullet.removeClass('is-active').blur();$newBullet.addClass('is-active');// Find the descriptor for the current slide to move it to the new slide button
var activeStateDescriptor=$oldBullet.children('[data-slide-active-label]').last();// If not explicitely given, search for the last "exceeding" span element (compared to others bullets).
if(!activeStateDescriptor.length){var spans=$oldBullet.children('span');var spanCountInOthersBullets=$othersBullets.toArray().map(function(b){return jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).children('span').length;});// If there is an exceeding span element, use it as current slide descriptor
if(spanCountInOthersBullets.every(function(count){return count<spans.length;})){activeStateDescriptor=spans.last();activeStateDescriptor.attr('data-slide-active-label','');}}// Move the current slide descriptor to the new slide button
if(activeStateDescriptor.length){activeStateDescriptor.detach();$newBullet.append(activeStateDescriptor);}}/**
    * Destroys the carousel and hides the element.
    * @function
    */},{key:"_destroy",value:function _destroy(){this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__.Plugin);_Orbit.defaults={/**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */bullets:true,/**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */navButtons:true,/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */animInFromRight:'slide-in-right',/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */animOutToRight:'slide-out-right',/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */animInFromLeft:'slide-in-left',/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */animOutToLeft:'slide-out-left',/**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */autoPlay:true,/**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */timerDelay:5000,/**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */infiniteWrap:true,/**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */swipe:true,/**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */pauseOnHover:true,/**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */accessible:true,/**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */containerClass:'orbit-container',/**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */slideClass:'orbit-slide',/**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */boxOfBullets:'orbit-bullets',/**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */nextClass:'orbit-next',/**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */prevClass:'orbit-previous',/**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */useMUI:true};/***/}),/***/"./js/foundation.positionable.js":(/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************//***/function _js_foundationPositionableJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Positionable:function Positionable(){return/* binding */_Positionable2;}/* harmony export */});/* harmony import */var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./foundation.util.box */"./js/foundation.util.box.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}var POSITIONS=['left','right','top','bottom'];var VERTICAL_ALIGNMENTS=['top','bottom','center'];var HORIZONTAL_ALIGNMENTS=['left','right','center'];var ALIGNMENTS={'left':VERTICAL_ALIGNMENTS,'right':VERTICAL_ALIGNMENTS,'top':HORIZONTAL_ALIGNMENTS,'bottom':HORIZONTAL_ALIGNMENTS};function nextItem(item,array){var currentIdx=array.indexOf(item);if(currentIdx===array.length-1){return array[0];}else{return array[currentIdx+1];}}var _Positionable2=/*#__PURE__*/function(_Plugin){function Positionable(){_classCallCheck(this,Positionable);return _callSuper(this,Positionable,arguments);}_inherits(Positionable,_Plugin);return _createClass(Positionable,[{key:"_init",value:/**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/function _init(){this.triedPositions={};this.position=this.options.position==='auto'?this._getDefaultPosition():this.options.position;this.alignment=this.options.alignment==='auto'?this._getDefaultAlignment():this.options.alignment;this.originalPosition=this.position;this.originalAlignment=this.alignment;}},{key:"_getDefaultPosition",value:function _getDefaultPosition(){return'bottom';}},{key:"_getDefaultAlignment",value:function _getDefaultAlignment(){switch(this.position){case'bottom':case'top':return(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl)()?'right':'left';case'left':case'right':return'bottom';}}/**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */},{key:"_reposition",value:function _reposition(){if(this._alignmentsExhausted(this.position)){this.position=nextItem(this.position,POSITIONS);this.alignment=ALIGNMENTS[this.position][0];}else{this._realign();}}/**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */},{key:"_realign",value:function _realign(){this._addTriedPosition(this.position,this.alignment);this.alignment=nextItem(this.alignment,ALIGNMENTS[this.position]);}},{key:"_addTriedPosition",value:function _addTriedPosition(position,alignment){this.triedPositions[position]=this.triedPositions[position]||[];this.triedPositions[position].push(alignment);}},{key:"_positionsExhausted",value:function _positionsExhausted(){var isExhausted=true;for(var i=0;i<POSITIONS.length;i++){isExhausted=isExhausted&&this._alignmentsExhausted(POSITIONS[i]);}return isExhausted;}},{key:"_alignmentsExhausted",value:function _alignmentsExhausted(position){return this.triedPositions[position]&&this.triedPositions[position].length===ALIGNMENTS[position].length;}// When we're trying to center, we don't want to apply offset that's going to
// take us just off center, so wrap around to return 0 for the appropriate
// offset in those alignments.  TODO: Figure out if we want to make this
// configurable behavior... it feels more intuitive, especially for tooltips, but
// it's possible someone might actually want to start from center and then nudge
// slightly off.
},{key:"_getVOffset",value:function _getVOffset(){return this.options.vOffset;}},{key:"_getHOffset",value:function _getHOffset(){return this.options.hOffset;}},{key:"_setPosition",value:function _setPosition($anchor,$element,$parent){if($anchor.attr('aria-expanded')==='false'){return false;}if(!this.options.allowOverlap){// restore original position & alignment before checking overlap
this.position=this.originalPosition;this.alignment=this.originalAlignment;}$element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.GetExplicitOffsets($element,$anchor,this.position,this.alignment,this._getVOffset(),this._getHOffset()));if(!this.options.allowOverlap){var minOverlap=100000000;// default coordinates to how we start, in case we can't figure out better
var minCoordinates={position:this.position,alignment:this.alignment};while(!this._positionsExhausted()){var overlap=_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.OverlapArea($element,$parent,false,false,this.options.allowBottomOverlap);if(overlap===0){return;}if(overlap<minOverlap){minOverlap=overlap;minCoordinates={position:this.position,alignment:this.alignment};}this._reposition();$element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.GetExplicitOffsets($element,$anchor,this.position,this.alignment,this._getVOffset(),this._getHOffset()));}// If we get through the entire loop, there was no non-overlapping
// position available. Pick the version with least overlap.
this.position=minCoordinates.position;this.alignment=minCoordinates.alignment;$element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.GetExplicitOffsets($element,$anchor,this.position,this.alignment,this._getVOffset(),this._getHOffset()));}}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);_Positionable2.defaults={/**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */position:'auto',/**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */alignment:'auto',/**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */allowOverlap:false,/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */allowBottomOverlap:true,/**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */vOffset:0,/**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */hOffset:0};/***/}),/***/"./js/foundation.responsiveAccordionTabs.js":(/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************//***/function _js_foundationResponsiveAccordionTabsJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */ResponsiveAccordionTabs:function ResponsiveAccordionTabs(){return/* binding */_ResponsiveAccordionTabs;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.accordion */"./js/foundation.accordion.js");/* harmony import */var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.tabs */"./js/foundation.tabs.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}// The plugin matches the plugin classes with these plugin instances.
var MenuPlugins={tabs:{cssClass:'tabs',plugin:_foundation_tabs__WEBPACK_IMPORTED_MODULE_5__.Tabs,open:function open(plugin,target){return plugin.selectTab(target);},close:null/* not supported */,toggle:null/* not supported */},accordion:{cssClass:'accordion',plugin:_foundation_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion,open:function open(plugin,target){return plugin.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));},close:function close(plugin,target){return plugin.up(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));},toggle:function toggle(plugin,target){return plugin.toggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));}}};/**
 * ResponsiveAccordionTabs module.
 * @module foundation.responsiveAccordionTabs
 * @requires foundation.util.motion
 * @requires foundation.accordion
 * @requires foundation.tabs
 */var _ResponsiveAccordionTabs=/*#__PURE__*/function(_Plugin){function ResponsiveAccordionTabs(element,options){var _this2;_classCallCheck(this,ResponsiveAccordionTabs);_this2=_callSuper(this,ResponsiveAccordionTabs,[element,options]);return _possibleConstructorReturn(_this2,_this2.options.reflow&&_this2.storezfData||_this2);}/**
   * Creates a new instance of a responsive accordion tabs.
   * @class
   * @name ResponsiveAccordionTabs
   * @fires ResponsiveAccordionTabs#init
   * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */_inherits(ResponsiveAccordionTabs,_Plugin);return _createClass(ResponsiveAccordionTabs,[{key:"_setup",value:function _setup(element,options){this.$element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);this.$element.data('zfPluginBase',this);this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},ResponsiveAccordionTabs.defaults,this.$element.data(),options);this.rules=this.$element.data('responsive-accordion-tabs');this.currentMq=null;this.currentRule=null;this.currentPlugin=null;this.className='ResponsiveAccordionTabs';// ie9 back compat
if(!this.$element.attr('id')){this.$element.attr('id',(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'responsiveaccordiontabs'));}this._init();this._events();}/**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(typeof this.rules==='string'){var rulesTree={};// Parse rules from "classes" pulled from data attribute
var rules=this.rules.split(' ');// Iterate through every rule found
for(var i=0;i<rules.length;i++){var rule=rules[i].split('-');var ruleSize=rule.length>1?rule[0]:'small';var rulePlugin=rule.length>1?rule[1]:rule[0];if(MenuPlugins[rulePlugin]!==null){rulesTree[ruleSize]=MenuPlugins[rulePlugin];}}this.rules=rulesTree;}this._getAllOptions();if(!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(this.rules)){this._checkMediaQueries();}}},{key:"_getAllOptions",value:function _getAllOptions(){//get all defaults and options
var _this=this;_this.allOptions={};for(var key in MenuPlugins){if(MenuPlugins.hasOwnProperty(key)){var obj=MenuPlugins[key];try{var dummyPlugin=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');var tmpPlugin=new obj.plugin(dummyPlugin,_this.options);for(var keyKey in tmpPlugin.options){if(tmpPlugin.options.hasOwnProperty(keyKey)&&keyKey!=='zfPlugin'){var objObj=tmpPlugin.options[keyKey];_this.allOptions[keyKey]=objObj;}}tmpPlugin.destroy();}catch(e){console.warn("Warning: Problems getting Accordion/Tab options: ".concat(e));}}}}/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function _events(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this);jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',this._changedZfMediaQueryHandler);}/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function _checkMediaQueries(){var matchedMq,_this=this;// Iterate through each rule and find the last matching rule
jquery__WEBPACK_IMPORTED_MODULE_0___default().each(this.rules,function(key){if(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(key)){matchedMq=key;}});// No match? No dice
if(!matchedMq)return;// Plugin already initialized? We good
if(this.currentPlugin instanceof this.rules[matchedMq].plugin)return;// Remove existing plugin-specific CSS classes
jquery__WEBPACK_IMPORTED_MODULE_0___default().each(MenuPlugins,function(key,value){_this.$element.removeClass(value.cssClass);});// Add the CSS class for the new plugin
this.$element.addClass(this.rules[matchedMq].cssClass);// Create an instance of the new plugin
if(this.currentPlugin){//don't know why but on nested elements data zfPlugin get's lost
if(!this.currentPlugin.$element.data('zfPlugin')&&this.storezfData)this.currentPlugin.$element.data('zfPlugin',this.storezfData);this.currentPlugin.destroy();}this._handleMarkup(this.rules[matchedMq].cssClass);this.currentRule=this.rules[matchedMq];this.currentPlugin=new this.currentRule.plugin(this.$element,this.options);this.storezfData=this.currentPlugin.$element.data('zfPlugin');}},{key:"_handleMarkup",value:function _handleMarkup(toSet){var _this=this,fromString='accordion';var $panels=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content='+this.$element.attr('id')+']');if($panels.length)fromString='tabs';if(fromString===toSet){return;}var tabsTitle=_this.allOptions.linkClass?_this.allOptions.linkClass:'tabs-title';var tabsPanel=_this.allOptions.panelClass?_this.allOptions.panelClass:'tabs-panel';this.$element.removeAttr('role');var $liHeads=this.$element.children('.'+tabsTitle+',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');var $liHeadsA=$liHeads.children('a').removeClass('accordion-title');if(fromString==='tabs'){$panels=$panels.children('.'+tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');$panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');}else{$panels=$liHeads.children('[data-tab-content]').removeClass('accordion-content');}$panels.css({display:'',visibility:''});$liHeads.css({display:'',visibility:''});if(toSet==='accordion'){$panels.each(function(key,value){jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content','').removeClass('is-active').css({height:''});jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content='+_this.$element.attr('id')+']').after('<div id="tabs-placeholder-'+_this.$element.attr('id')+'"></div>').detach();$liHeads.addClass('accordion-item').attr('data-accordion-item','');$liHeadsA.addClass('accordion-title');});}else if(toSet==='tabs'){var $tabsContent=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content='+_this.$element.attr('id')+']');var $placeholder=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-'+_this.$element.attr('id'));if($placeholder.length){$tabsContent=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content',_this.$element.attr('id'));$placeholder.remove();}else{$tabsContent=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content',_this.$element.attr('id'));}$panels.each(function(key,value){var tempValue=jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);var hash=$liHeadsA.get(key).hash.slice(1);var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id')||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'accordion');if(hash!==id){if(hash!==''){jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id',hash);}else{hash=id;jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id',hash);jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href',jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#','')+'#'+hash);}}var isActive=jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');if(isActive){tempValue.addClass('is-active');}});$liHeads.addClass(tabsTitle);};}/**
     * Opens the plugin pane defined by `target`.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to open.
     * @see Accordion.down
     * @see Tabs.selectTab
     * @function
     */},{key:"open",value:function open(){if(this.currentRule&&typeof this.currentRule.open==='function'){var _this$currentRule;return(_this$currentRule=this.currentRule).open.apply(_this$currentRule,[this.currentPlugin].concat(Array.prototype.slice.call(arguments)));}}/**
     * Closes the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to close.
     * @see Accordion.up
     * @function
     */},{key:"close",value:function close(){if(this.currentRule&&typeof this.currentRule.close==='function'){var _this$currentRule2;return(_this$currentRule2=this.currentRule).close.apply(_this$currentRule2,[this.currentPlugin].concat(Array.prototype.slice.call(arguments)));}}/**
     * Toggles the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to toggle.
     * @see Accordion.toggle
     * @function
     */},{key:"toggle",value:function toggle(){if(this.currentRule&&typeof this.currentRule.toggle==='function'){var _this$currentRule3;return(_this$currentRule3=this.currentRule).toggle.apply(_this$currentRule3,[this.currentPlugin].concat(Array.prototype.slice.call(arguments)));}}/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function _destroy(){if(this.currentPlugin)this.currentPlugin.destroy();jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery',this._changedZfMediaQueryHandler);}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin);_ResponsiveAccordionTabs.defaults={};/***/}),/***/"./js/foundation.responsiveMenu.js":(/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************//***/function _js_foundationResponsiveMenuJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */ResponsiveMenu:function ResponsiveMenu(){return/* binding */_ResponsiveMenu;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.dropdownMenu */"./js/foundation.dropdownMenu.js");/* harmony import */var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.drilldown */"./js/foundation.drilldown.js");/* harmony import */var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./foundation.accordionMenu */"./js/foundation.accordionMenu.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}var MenuPlugins={dropdown:{cssClass:'dropdown',plugin:_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu},drilldown:{cssClass:'drilldown',plugin:_foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__.Drilldown},accordion:{cssClass:'accordion-menu',plugin:_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__.AccordionMenu}};// import "foundation.util.triggers.js";
/**
 * ResponsiveMenu module.
 * @module foundation.responsiveMenu
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */var _ResponsiveMenu=/*#__PURE__*/function(_Plugin){function ResponsiveMenu(){_classCallCheck(this,ResponsiveMenu);return _callSuper(this,ResponsiveMenu,arguments);}_inherits(ResponsiveMenu,_Plugin);return _createClass(ResponsiveMenu,[{key:"_setup",value:/**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element){this.$element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);this.rules=this.$element.data('responsive-menu');this.currentMq=null;this.currentPlugin=null;this.className='ResponsiveMenu';// ie9 back compat
this._init();this._events();}/**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(typeof this.rules==='string'){var rulesTree={};// Parse rules from "classes" pulled from data attribute
var rules=this.rules.split(' ');// Iterate through every rule found
for(var i=0;i<rules.length;i++){var rule=rules[i].split('-');var ruleSize=rule.length>1?rule[0]:'small';var rulePlugin=rule.length>1?rule[1]:rule[0];if(MenuPlugins[rulePlugin]!==null){rulesTree[ruleSize]=MenuPlugins[rulePlugin];}}this.rules=rulesTree;}if(!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(this.rules)){this._checkMediaQueries();}// Add data-mutate since children may need it.
this.$element.attr('data-mutate',this.$element.attr('data-mutate')||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'responsive-menu'));}/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function _events(){var _this=this;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',function(){_this._checkMediaQueries();});// $(window).on('resize.zf.ResponsiveMenu', function() {
//   _this._checkMediaQueries();
// });
}/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function _checkMediaQueries(){var matchedMq,_this=this;// Iterate through each rule and find the last matching rule
jquery__WEBPACK_IMPORTED_MODULE_0___default().each(this.rules,function(key){if(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(key)){matchedMq=key;}});// No match? No dice
if(!matchedMq)return;// Plugin already initialized? We good
if(this.currentPlugin instanceof this.rules[matchedMq].plugin)return;// Remove existing plugin-specific CSS classes
jquery__WEBPACK_IMPORTED_MODULE_0___default().each(MenuPlugins,function(key,value){_this.$element.removeClass(value.cssClass);});// Add the CSS class for the new plugin
this.$element.addClass(this.rules[matchedMq].cssClass);// Create an instance of the new plugin
if(this.currentPlugin)this.currentPlugin.destroy();this.currentPlugin=new this.rules[matchedMq].plugin(this.$element,{});}/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.currentPlugin.destroy();jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin);_ResponsiveMenu.defaults={};/***/}),/***/"./js/foundation.responsiveToggle.js":(/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************//***/function _js_foundationResponsiveToggleJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */ResponsiveToggle:function ResponsiveToggle(){return/* binding */_ResponsiveToggle;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.motion */"./js/foundation.util.motion.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */var _ResponsiveToggle=/*#__PURE__*/function(_Plugin){function ResponsiveToggle(){_classCallCheck(this,ResponsiveToggle);return _callSuper(this,ResponsiveToggle,arguments);}_inherits(ResponsiveToggle,_Plugin);return _createClass(ResponsiveToggle,[{key:"_setup",value:/**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},ResponsiveToggle.defaults,this.$element.data(),options);this.className='ResponsiveToggle';// ie9 back compat
this._init();this._events();}/**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();var targetID=this.$element.data('responsive-toggle');if(!targetID){console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');}this.$targetMenu=jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetID));this.$toggler=this.$element.find('[data-toggle]').filter(function(){var target=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');return target===targetID||target==="";});this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},this.options,this.$targetMenu.data());// If they were set, parse the animation classes
if(this.options.animate){var input=this.options.animate.split(' ');this.animationIn=input[0];this.animationOut=input[1]||null;}this._update();}/**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */},{key:"_events",value:function _events(){this._updateMqHandler=this._update.bind(this);jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',this._updateMqHandler);this.$toggler.on('click.zf.responsiveToggle',this.toggleMenu.bind(this));}/**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */},{key:"_update",value:function _update(){// Mobile
if(!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(this.options.hideFor)){this.$element.show();this.$targetMenu.hide();}// Desktop
else{this.$element.hide();this.$targetMenu.show();}}/**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */},{key:"toggleMenu",value:function toggleMenu(){var _this=this;if(!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(this.options.hideFor)){/**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */if(this.options.animate){if(this.$targetMenu.is(':hidden')){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateIn(this.$targetMenu,this.animationIn,function(){_this.$element.trigger('toggled.zf.responsiveToggle');_this.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');});}else{_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateOut(this.$targetMenu,this.animationOut,function(){_this.$element.trigger('toggled.zf.responsiveToggle');});}}else{this.$targetMenu.toggle(0);this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');this.$element.trigger('toggled.zf.responsiveToggle');}}}},{key:"_destroy",value:function _destroy(){this.$element.off('.zf.responsiveToggle');this.$toggler.off('.zf.responsiveToggle');jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery',this._updateMqHandler);}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin);_ResponsiveToggle.defaults={/**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */hideFor:'medium',/**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */animate:false};/***/}),/***/"./js/foundation.reveal.js":(/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************//***/function _js_foundationRevealJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Reveal:function Reveal(){return/* binding */_Reveal;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.util.motion */"./js/foundation.util.motion.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");/* harmony import */var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./foundation.util.touch */"./js/foundation.util.touch.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */var _Reveal=/*#__PURE__*/function(_Plugin){function Reveal(){_classCallCheck(this,Reveal);return _callSuper(this,Reveal,arguments);}_inherits(Reveal,_Plugin);return _createClass(Reveal,[{key:"_setup",value:/**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Reveal.defaults,this.$element.data(),options);this.className='Reveal';// ie9 back compat
this._init();// Touch and Triggers init are idempotent, just need to make sure they are initialized
_foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__.Touch.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('Reveal',{'ESCAPE':'close'});}/**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */},{key:"_init",value:function _init(){var _this2=this;_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery._init();this.id=this.$element.attr('id');this.isActive=false;this.cached={mq:_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.current};this.$anchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id,"\"]")).length?jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id,"\"]")):jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat(this.id,"\"]"));this.$anchor.attr({'aria-controls':this.id,'aria-haspopup':'dialog','tabindex':0});if(this.options.fullScreen||this.$element.hasClass('full')){this.options.fullScreen=true;this.options.overlay=false;}if(this.options.overlay&&!this.$overlay){this.$overlay=this._makeOverlay(this.id);}this.$element.attr({'role':'dialog','aria-hidden':true,'data-yeti-box':this.id,'data-resize':this.id});if(this.$overlay){this.$element.detach().appendTo(this.$overlay);}else{this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));this.$element.addClass('without-overlay');}this._events();if(this.options.deepLink&&window.location.hash==="#".concat(this.id)){this.onLoadListener=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){return _this2.open();});}}/**
     * Creates an overlay div to display behind the modal.
     * @private
     */},{key:"_makeOverlay",value:function _makeOverlay(){var additionalOverlayClasses='';if(this.options.additionalOverlayClasses){additionalOverlayClasses=' '+this.options.additionalOverlayClasses;}return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay'+additionalOverlayClasses).appendTo(this.options.appendTo);}/**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */},{key:"_updatePosition",value:function _updatePosition(){var width=this.$element.outerWidth();var outerWidth=jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();var height=this.$element.outerHeight();var outerHeight=jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();var left,top=null;if(this.options.hOffset==='auto'){left=parseInt((outerWidth-width)/2,10);}else{left=parseInt(this.options.hOffset,10);}if(this.options.vOffset==='auto'){if(height>outerHeight){top=parseInt(Math.min(100,outerHeight/10),10);}else{top=parseInt((outerHeight-height)/4,10);}}else if(this.options.vOffset!==null){top=parseInt(this.options.vOffset,10);}if(top!==null){this.$element.css({top:top+'px'});}// only worry about left if we don't have an overlay or we have a horizontal offset,
// otherwise we're perfectly in the middle
if(!this.$overlay||this.options.hOffset!=='auto'){this.$element.css({left:left+'px'});this.$element.css({margin:'0px'});}}/**
     * Adds event handlers for the modal.
     * @private
     */},{key:"_events",value:function _events(){var _this3=this;var _this=this;this.$element.on({'open.zf.trigger':this.open.bind(this),'close.zf.trigger':function closeZfTrigger(event,$element){if(event.target===_this.$element[0]||jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0]===$element){// only close reveal when it's explicitly called
return _this3.close.apply(_this3);}},'toggle.zf.trigger':this.toggle.bind(this),'resizeme.zf.trigger':function resizemeZfTrigger(){_this._updatePosition();}});if(this.options.closeOnClick&&this.options.overlay){this.$overlay.off('.zf.reveal').on('click.zf.dropdown tap.zf.dropdown',function(e){if(e.target===_this.$element[0]||jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0],e.target)||!jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document,e.target)){return;}_this.close();});}if(this.options.deepLink){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this));}}/**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */},{key:"_handleState",value:function _handleState(){if(window.location.hash==='#'+this.id&&!this.isActive){this.open();}else{this.close();}}/**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */},{key:"_disableScroll",value:function _disableScroll(scrollTop){scrollTop=scrollTop||jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height()>jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()){jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top",-scrollTop);}}/**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */},{key:"_enableScroll",value:function _enableScroll(scrollTop){scrollTop=scrollTop||parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"),10);if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height()>jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()){jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top","");jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);}}/**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */},{key:"open",value:function open(){var _this4=this;// either update or replace browser history
var hash="#".concat(this.id);if(this.options.deepLink&&window.location.hash!==hash){if(window.history.pushState){if(this.options.updateHistory){window.history.pushState({},'',hash);}else{window.history.replaceState({},'',hash);}}else{window.location.hash=hash;}}// Remember anchor that opened it to set focus back later, have general anchors as fallback
this.$activeAnchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor)?jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement):this.$anchor;this.isActive=true;// Make elements invisible, but remove display: none so we can get size and positioning
this.$element.css({'visibility':'hidden'}).show().scrollTop(0);if(this.options.overlay){this.$overlay.css({'visibility':'hidden'}).show();}this._updatePosition();this.$element.hide().css({'visibility':''});if(this.$overlay){this.$overlay.css({'visibility':''}).hide();if(this.$element.hasClass('fast')){this.$overlay.addClass('fast');}else if(this.$element.hasClass('slow')){this.$overlay.addClass('slow');}}if(!this.options.multipleOpened){/**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */this.$element.trigger('closeme.zf.reveal',this.id);}if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length===0){this._disableScroll();}var _this=this;// Motion UI method of reveal
if(this.options.animationIn){var afterAnimation=function afterAnimation(){_this.$element.attr({'aria-hidden':false,'tabindex':-1}).focus();_this._addGlobalClasses();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.trapFocus(_this.$element);};if(this.options.overlay){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateIn(this.$overlay,'fade-in');}_foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateIn(this.$element,this.options.animationIn,function(){if(_this4.$element){// protect against object having been removed
_this4.focusableElements=_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.findFocusable(_this4.$element);afterAnimation();}});}// jQuery method of reveal
else{if(this.options.overlay){this.$overlay.show(0);}this.$element.show(this.options.showDelay);}// handle accessibility
this.$element.attr({'aria-hidden':false,'tabindex':-1}).focus();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.trapFocus(this.$element);this._addGlobalClasses();this._addGlobalListeners();/**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */this.$element.trigger('open.zf.reveal');}/**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */},{key:"_addGlobalClasses",value:function _addGlobalClasses(){var updateScrollbarClass=function updateScrollbarClass(){jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll',!!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height()>jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));};this.$element.on('resizeme.zf.trigger.revealScrollbarListener',function(){return updateScrollbarClass();});updateScrollbarClass();jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');}/**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */},{key:"_removeGlobalClasses",value:function _removeGlobalClasses(){this.$element.off('resizeme.zf.trigger.revealScrollbarListener');jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');}/**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */},{key:"_addGlobalListeners",value:function _addGlobalListeners(){var _this=this;if(!this.$element){return;}// If we're in the middle of cleanup, don't freak out
this.focusableElements=_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.findFocusable(this.$element);if(!this.options.overlay&&this.options.closeOnClick&&!this.options.fullScreen){jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.dropdown tap.zf.dropdown',function(e){if(e.target===_this.$element[0]||jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0],e.target)||!jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document,e.target)){return;}_this.close();});}if(this.options.closeOnEsc){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal',function(e){_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e,'Reveal',{close:function close(){if(_this.options.closeOnEsc){_this.close();}}});});}}/**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */},{key:"close",value:function close(){if(!this.isActive||!this.$element.is(':visible')){return false;}var _this=this;// Motion UI method of hiding
if(this.options.animationOut){if(this.options.overlay){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateOut(this.$overlay,'fade-out');}_foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateOut(this.$element,this.options.animationOut,finishUp);}// jQuery method of hiding
else{this.$element.hide(this.options.hideDelay);if(this.options.overlay){this.$overlay.hide(0,finishUp);}else{finishUp();}}// Conditionals to remove extra event listeners added on open
if(this.options.closeOnEsc){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');}if(!this.options.overlay&&this.options.closeOnClick){jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.dropdown tap.zf.dropdown');}this.$element.off('keydown.zf.reveal');function finishUp(){// Get the current top before the modal is closed and restore the scroll after.
// TODO: use component properties instead of HTML properties
// See https://github.com/foundation/foundation-sites/pull/10786
var scrollTop=parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"),10);if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length===0){_this._removeGlobalClasses();// also remove .is-reveal-open from the html element when there is no opened reveal
}_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.releaseFocus(_this.$element);_this.$element.attr('aria-hidden',true);if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length===0){_this._enableScroll(scrollTop);}/**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */_this.$element.trigger('closed.zf.reveal');}/**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */if(this.options.resetOnClose){this.$element.html(this.$element.html());}this.isActive=false;// If deepLink and we did not switched to an other modal...
if(_this.options.deepLink&&window.location.hash==="#".concat(this.id)){// Remove the history hash
if(window.history.replaceState){var urlWithoutHash=window.location.pathname+window.location.search;if(this.options.updateHistory){window.history.pushState({},'',urlWithoutHash);// remove the hash
}else{window.history.replaceState('',document.title,urlWithoutHash);}}else{window.location.hash='';}}this.$activeAnchor.focus();}/**
     * Toggles the open/closed state of a modal.
     * @function
     */},{key:"toggle",value:function toggle(){if(this.isActive){this.close();}else{this.open();}}},{key:"_destroy",value:/**
     * Destroys an instance of a modal.
     * @function
     */function _destroy(){if(this.options.overlay){this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));// move $element outside of $overlay to prevent error unregisterPlugin()
this.$overlay.hide().off().remove();}this.$element.hide().off();this.$anchor.off('.zf');jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(".zf.reveal:".concat(this.id));if(this.onLoadListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);if(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length===0){this._removeGlobalClasses();// also remove .is-reveal-open from the html element when there is no opened reveal
}}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);_Reveal.defaults={/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */animationIn:'',/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */animationOut:'',/**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */showDelay:0,/**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */hideDelay:0,/**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */closeOnClick:true,/**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */closeOnEsc:true,/**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */multipleOpened:false,/**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */vOffset:'auto',/**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */hOffset:'auto',/**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */fullScreen:false,/**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */overlay:true,/**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */resetOnClose:false,/**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */deepLink:false,/**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */updateHistory:false,/**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */appendTo:"body",/**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */additionalOverlayClasses:''};/***/}),/***/"./js/foundation.slider.js":(/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************//***/function _js_foundationSliderJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Slider:function Slider(){return/* binding */_Slider;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.motion */"./js/foundation.util.motion.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./foundation.util.touch */"./js/foundation.util.touch.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */var _Slider=/*#__PURE__*/function(_Plugin){function Slider(){_classCallCheck(this,Slider);return _callSuper(this,Slider,arguments);}_inherits(Slider,_Plugin);return _createClass(Slider,[{key:"_setup",value:/**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Slider.defaults,this.$element.data(),options);this.className='Slider';// ie9 back compat
this.initialized=false;// Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
_foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__.Touch.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Slider',{'ltr':{'ARROW_RIGHT':'increase','ARROW_UP':'increase','ARROW_DOWN':'decrease','ARROW_LEFT':'decrease','SHIFT_ARROW_RIGHT':'increaseFast','SHIFT_ARROW_UP':'increaseFast','SHIFT_ARROW_DOWN':'decreaseFast','SHIFT_ARROW_LEFT':'decreaseFast','HOME':'min','END':'max'},'rtl':{'ARROW_LEFT':'increase','ARROW_RIGHT':'decrease','SHIFT_ARROW_LEFT':'increaseFast','SHIFT_ARROW_RIGHT':'decreaseFast'}});}/**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */},{key:"_init",value:function _init(){this.inputs=this.$element.find('input');this.handles=this.$element.find('[data-slider-handle]');this.$handle=this.handles.eq(0);this.$input=this.inputs.length?this.inputs.eq(0):jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle.attr('aria-controls')));this.$fill=this.$element.find('[data-slider-fill]').css(this.options.vertical?'height':'width',0);if(this.options.disabled||this.$element.hasClass(this.options.disabledClass)){this.options.disabled=true;this.$element.addClass(this.options.disabledClass);}if(!this.inputs.length){this.inputs=jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);this.options.binding=true;}this._setInitAttr(0);if(this.handles[1]){this.options.doubleSided=true;this.$handle2=this.handles.eq(1);this.$input2=this.inputs.length>1?this.inputs.eq(1):jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle2.attr('aria-controls')));if(!this.inputs[1]){this.inputs=this.inputs.add(this.$input2);}// this.$handle.triggerHandler('click.zf.slider');
this._setInitAttr(1);}// Set handle positions
this.setHandles();this._events();this.initialized=true;}},{key:"setHandles",value:function setHandles(){var _this2=this;if(this.handles[1]){this._setHandlePos(this.$handle,this.inputs.eq(0).val(),function(){_this2._setHandlePos(_this2.$handle2,_this2.inputs.eq(1).val());});}else{this._setHandlePos(this.$handle,this.inputs.eq(0).val());}}},{key:"_reflow",value:function _reflow(){this.setHandles();}/**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */},{key:"_pctOfBar",value:function _pctOfBar(value){var pctOfBar=percent(value-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":pctOfBar=this._logTransform(pctOfBar);break;case"log":pctOfBar=this._powTransform(pctOfBar);break;}return pctOfBar.toFixed(2);}/**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */},{key:"_value",value:function _value(pctOfBar){switch(this.options.positionValueFunction){case"pow":pctOfBar=this._powTransform(pctOfBar);break;case"log":pctOfBar=this._logTransform(pctOfBar);break;}var value;if(this.options.vertical){// linear interpolation which is working with negative values for start
// https://math.stackexchange.com/a/1019084
value=parseFloat(this.options.end)+pctOfBar*(this.options.start-this.options.end);}else{value=(this.options.end-this.options.start)*pctOfBar+parseFloat(this.options.start);}return value;}/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */},{key:"_logTransform",value:function _logTransform(value){return baseLog(this.options.nonLinearBase,value*(this.options.nonLinearBase-1)+1);}/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */},{key:"_powTransform",value:function _powTransform(value){return(Math.pow(this.options.nonLinearBase,value)-1)/(this.options.nonLinearBase-1);}/**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */},{key:"_setHandlePos",value:function _setHandlePos($hndl,location,cb){// don't move if the slider has been disabled since its initialization
if(this.$element.hasClass(this.options.disabledClass)){return;}//might need to alter that slightly for bars that will have odd number selections.
location=parseFloat(location);//on input change events, convert string to number...grumble.
// prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
if(location<this.options.start){location=this.options.start;}else if(location>this.options.end){location=this.options.end;}var isDbl=this.options.doubleSided;if(isDbl){//this block is to prevent 2 handles from crossing eachother. Could/should be improved.
if(this.handles.index($hndl)===0){var h2Val=parseFloat(this.$handle2.attr('aria-valuenow'));location=location>=h2Val?h2Val-this.options.step:location;}else{var h1Val=parseFloat(this.$handle.attr('aria-valuenow'));location=location<=h1Val?h1Val+this.options.step:location;}}var _this=this,vert=this.options.vertical,hOrW=vert?'height':'width',lOrT=vert?'top':'left',handleDim=$hndl[0].getBoundingClientRect()[hOrW],elemDim=this.$element[0].getBoundingClientRect()[hOrW],//percentage of bar min/max value based on click or drag point
pctOfBar=this._pctOfBar(location),//number of actual pixels to shift the handle, based on the percentage obtained above
pxToMove=(elemDim-handleDim)*pctOfBar,//percentage of bar to shift the handle
movement=(percent(pxToMove,elemDim)*100).toFixed(this.options.decimal);//fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
location=parseFloat(location.toFixed(this.options.decimal));// declare empty object for css adjustments, only used with 2 handled-sliders
var css={};this._setValues($hndl,location);// TODO update to calculate based on values set to respective inputs??
if(isDbl){var isLeftHndl=this.handles.index($hndl)===0,//empty variable, will be used for min-height/width for fill bar
dim,//percentage w/h of the handle compared to the slider bar
handlePct=Math.floor(percent(handleDim,elemDim)*100);//if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
if(isLeftHndl){//left or top percentage value to apply to the fill bar.
css[lOrT]="".concat(movement,"%");//calculate the new min-height/width for the fill bar.
dim=parseFloat(this.$handle2[0].style[lOrT])-movement+handlePct;//this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
//plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
if(cb&&typeof cb==='function'){cb();}//this is only needed for the initialization of 2 handled sliders
}else{//just caching the value of the left/bottom handle's left/top property
var handlePos=parseFloat(this.$handle[0].style[lOrT]);//calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
//based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
dim=movement-(isNaN(handlePos)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):handlePos)+handlePct;}// assign the min-height/width to our css object
css["min-".concat(hOrW)]="".concat(dim,"%");}//because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
var moveTime=this.$element.data('dragging')?1000/60:this.options.moveTime;(0,_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Move)(moveTime,$hndl,function(){// adjusting the left/top property of the handle, based on the percentage calculated above
// if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
// fall back to next best guess.
if(isNaN(movement)){$hndl.css(lOrT,"".concat(pctOfBar*100,"%"));}else{$hndl.css(lOrT,"".concat(movement,"%"));}if(!_this.options.doubleSided){//if single-handled, a simple method to expand the fill bar
_this.$fill.css(hOrW,"".concat(pctOfBar*100,"%"));}else{//otherwise, use the css object we created above
_this.$fill.css(css);}});if(this.initialized){this.$element.one('finished.zf.animate',function(){/**
           * Fires when the handle is done moving.
           * @event Slider#moved
           */_this.$element.trigger('moved.zf.slider',[$hndl]);});/**
         * Fires when the value has not been change for a given time.
         * @event Slider#changed
         */clearTimeout(_this.timeout);_this.timeout=setTimeout(function(){_this.$element.trigger('changed.zf.slider',[$hndl]);},_this.options.changedDelay);}}/**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */},{key:"_setInitAttr",value:function _setInitAttr(idx){var initVal=idx===0?this.options.initialStart:this.options.initialEnd;var id=this.inputs.eq(idx).attr('id')||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6,'slider');this.inputs.eq(idx).attr({'id':id,'max':this.options.end,'min':this.options.start,'step':this.options.step});this.inputs.eq(idx).val(initVal);this.handles.eq(idx).attr({'role':'slider','aria-controls':id,'aria-valuemax':this.options.end,'aria-valuemin':this.options.start,'aria-valuenow':initVal,'aria-orientation':this.options.vertical?'vertical':'horizontal','tabindex':0});}/**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */},{key:"_setValues",value:function _setValues($handle,val){var idx=this.options.doubleSided?this.handles.index($handle):0;this.inputs.eq(idx).val(val);$handle.attr('aria-valuenow',val);}/**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */},{key:"_handleEvent",value:function _handleEvent(e,$handle,val){var value;if(!val){//click or drag events
e.preventDefault();var _this=this,vertical=this.options.vertical,param=vertical?'height':'width',direction=vertical?'top':'left',eventOffset=vertical?e.pageY:e.pageX,barDim=this.$element[0].getBoundingClientRect()[param],windowScroll=vertical?jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop():jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();var elemOffset=this.$element.offset()[direction];// touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
// best way to guess this is simulated is if clientY == pageY
if(e.clientY===e.pageY){eventOffset=eventOffset+windowScroll;}var eventFromBar=eventOffset-elemOffset;var barXY;if(eventFromBar<0){barXY=0;}else if(eventFromBar>barDim){barXY=barDim;}else{barXY=eventFromBar;}var offsetPct=percent(barXY,barDim);value=this._value(offsetPct);// turn everything around for RTL, yay math!
if((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.rtl)()&&!this.options.vertical){value=this.options.end-value;}value=_this._adjustValue(null,value);if(!$handle){//figure out which handle it is, pass it to the next function.
var firstHndlPos=absPosition(this.$handle,direction,barXY,param),secndHndlPos=absPosition(this.$handle2,direction,barXY,param);$handle=firstHndlPos<=secndHndlPos?this.$handle:this.$handle2;}}else{//change event on input
value=this._adjustValue(null,val);}this._setHandlePos($handle,value);}/**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */},{key:"_adjustValue",value:function _adjustValue($handle,value){var val,step=this.options.step,div=parseFloat(step/2),left,previousVal,nextVal;if(!!$handle){val=parseFloat($handle.attr('aria-valuenow'));}else{val=value;}if(val>=0){left=val%step;}else{left=step+val%step;}previousVal=val-left;nextVal=previousVal+step;if(left===0){return val;}val=val>=previousVal+div?nextVal:previousVal;return val;}/**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */},{key:"_events",value:function _events(){this._eventsForHandle(this.$handle);if(this.handles[1]){this._eventsForHandle(this.$handle2);}}/**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */},{key:"_eventsForHandle",value:function _eventsForHandle($handle){var _this=this,curHandle;var handleChangeEvent=function handleChangeEvent(e){var idx=_this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));_this._handleEvent(e,_this.handles.eq(idx),jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());};// IE only triggers the change event when the input loses focus which strictly follows the HTML specification
// listen for the enter key and trigger a change
// @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events
this.inputs.off('keyup.zf.slider').on('keyup.zf.slider',function(e){if(e.keyCode===13)handleChangeEvent.call(this,e);});this.inputs.off('change.zf.slider').on('change.zf.slider',handleChangeEvent);if(this.options.clickSelect){this.$element.off('click.zf.slider').on('click.zf.slider',function(e){if(_this.$element.data('dragging')){return false;}if(!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')){if(_this.options.doubleSided){_this._handleEvent(e);}else{_this._handleEvent(e,_this.$handle);}}});}if(this.options.draggable){this.handles.addTouch();var $body=jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');$handle.off('mousedown.zf.slider').on('mousedown.zf.slider',function(e){$handle.addClass('is-dragging');_this.$fill.addClass('is-dragging');//
_this.$element.data('dragging',true);curHandle=jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);$body.on('mousemove.zf.slider',function(ev){ev.preventDefault();_this._handleEvent(ev,curHandle);}).on('mouseup.zf.slider',function(ev){_this._handleEvent(ev,curHandle);$handle.removeClass('is-dragging');_this.$fill.removeClass('is-dragging');_this.$element.data('dragging',false);$body.off('mousemove.zf.slider mouseup.zf.slider');});})// prevent events triggered by touch
.on('selectstart.zf.slider touchmove.zf.slider',function(e){e.preventDefault();});}$handle.off('keydown.zf.slider').on('keydown.zf.slider',function(e){var _$handle=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),idx=_this.options.doubleSided?_this.handles.index(_$handle):0,oldValue=parseFloat($handle.attr('aria-valuenow')),newValue;// handle keyboard event with keyboard util
_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e,'Slider',{decrease:function decrease(){newValue=oldValue-_this.options.step;},increase:function increase(){newValue=oldValue+_this.options.step;},decreaseFast:function decreaseFast(){newValue=oldValue-_this.options.step*10;},increaseFast:function increaseFast(){newValue=oldValue+_this.options.step*10;},min:function min(){newValue=_this.options.start;},max:function max(){newValue=_this.options.end;},handled:function handled(){// only set handle pos when event was handled specially
e.preventDefault();_this._setHandlePos(_$handle,newValue);}});/*if (newValue) { // if pressed key has special function, update value
          e.preventDefault();
          _this._setHandlePos(_$handle, newValue);
        }*/});}/**
     * Destroys the slider plugin.
     */},{key:"_destroy",value:function _destroy(){this.handles.off('.zf.slider');this.inputs.off('.zf.slider');this.$element.off('.zf.slider');clearTimeout(this.timeout);}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin);_Slider.defaults={/**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */start:0,/**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */end:100,/**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */step:1,/**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */initialStart:0,/**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */initialEnd:100,/**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */binding:false,/**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */clickSelect:true,/**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */vertical:false,/**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */draggable:true,/**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */disabled:false,/**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */doubleSided:false,/**
   * Potential future feature.
   */// steps: 100,
/**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */decimal:2,/**
   * Time delay for dragged elements.
   */// dragDelay: 0,
/**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */moveTime:200,//update this if changing the transition time in the sass
/**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */disabledClass:'disabled',/**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */invertVertical:false,/**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */changedDelay:500,/**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */nonLinearBase:5,/**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */positionValueFunction:'linear'};function percent(frac,num){return frac/num;}function absPosition($handle,dir,clickPos,param){return Math.abs($handle.position()[dir]+$handle[param]()/2-clickPos);}function baseLog(base,value){return Math.log(value)/Math.log(base);}/***/}),/***/"./js/foundation.smoothScroll.js":(/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************//***/function _js_foundationSmoothScrollJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */SmoothScroll:function SmoothScroll(){return/* binding */_SmoothScroll;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * SmoothScroll module.
 * @module foundation.smoothScroll
 */var _SmoothScroll=/*#__PURE__*/function(_Plugin){function SmoothScroll(){_classCallCheck(this,SmoothScroll);return _callSuper(this,SmoothScroll,arguments);}_inherits(SmoothScroll,_Plugin);return _createClass(SmoothScroll,[{key:"_setup",value:/**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},SmoothScroll.defaults,this.$element.data(),options);this.className='SmoothScroll';// ie9 back compat
this._init();}/**
     * Initialize the SmoothScroll plugin
     * @private
     */},{key:"_init",value:function _init(){var id=this.$element[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.GetYoDigits)(6,'smooth-scroll');this.$element.attr({id:id});this._events();}/**
     * Initializes events for SmoothScroll.
     * @private
     */},{key:"_events",value:function _events(){this._linkClickListener=this._handleLinkClick.bind(this);this.$element.on('click.zf.smoothScroll',this._linkClickListener);this.$element.on('click.zf.smoothScroll','a[href^="#"]',this._linkClickListener);}/**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */},{key:"_handleLinkClick",value:function _handleLinkClick(e){var _this=this;// Follow the link if it does not point to an anchor.
if(!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]'))return;var arrival=e.currentTarget.getAttribute('href');this._inTransition=true;SmoothScroll.scrollToLoc(arrival,this.options,function(){_this._inTransition=false;});e.preventDefault();}},{key:"_destroy",value:/**
     * Destroys the SmoothScroll instance.
     * @function
     */function _destroy(){this.$element.off('click.zf.smoothScroll',this._linkClickListener);this.$element.off('click.zf.smoothScroll','a[href^="#"]',this._linkClickListener);}}],[{key:"scrollToLoc",value:/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */function scrollToLoc(loc){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:SmoothScroll.defaults;var callback=arguments.length>2?arguments[2]:undefined;var $loc=jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc);// Do nothing if target does not exist to prevent errors
if(!$loc.length)return false;var scrollPos=Math.round($loc.offset().top-options.threshold/2-options.offset);jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({scrollTop:scrollPos},options.animationDuration,options.animationEasing,function(){if(typeof callback==='function'){callback();}});}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__.Plugin);/**
 * Default settings for plugin.
 */_SmoothScroll.defaults={/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */animationDuration:500,/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */animationEasing:'linear',/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */threshold:50,/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */offset:0};/***/}),/***/"./js/foundation.sticky.js":(/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************//***/function _js_foundationStickyJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Sticky:function Sticky(){return/* binding */_Sticky;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */var _Sticky=/*#__PURE__*/function(_Plugin){function Sticky(){_classCallCheck(this,Sticky);return _callSuper(this,Sticky,arguments);}_inherits(Sticky,_Plugin);return _createClass(Sticky,[{key:"_setup",value:/**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Sticky.defaults,this.$element.data(),options);this.className='Sticky';// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();}/**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__.MediaQuery._init();var $parent=this.$element.parent('[data-sticky-container]'),id=this.$element[0].id||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6,'sticky'),_this=this;if($parent.length){this.$container=$parent;}else{this.wasWrapped=true;this.$element.wrap(this.options.container);this.$container=this.$element.parent();}this.$container.addClass(this.options.containerClass);this.$element.addClass(this.options.stickyClass).attr({'data-resize':id,'data-mutate':id});if(this.options.anchor!==''){jquery__WEBPACK_IMPORTED_MODULE_0___default()('#'+_this.options.anchor).attr({'data-mutate':id});}this.scrollCount=this.options.checkEvery;this.isStuck=false;this.onLoadListener=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){//We calculate the container height to have correct values for anchor points offset calculation.
_this.containerHeight=_this.$element.css("display")==="none"?0:_this.$element[0].getBoundingClientRect().height;_this.$container.css('height',_this.containerHeight);_this.elemHeight=_this.containerHeight;if(_this.options.anchor!==''){_this.$anchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()('#'+_this.options.anchor);}else{_this._parsePoints();}_this._setSizes(function(){var scroll=window.pageYOffset;_this._calc(false,scroll);//Unstick the element will ensure that proper classes are set.
if(!_this.isStuck){_this._removeSticky(scroll>=_this.topPoint?false:true);}});_this._events(id.split('-').reverse().join('-'));});}/**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */},{key:"_parsePoints",value:function _parsePoints(){var top=this.options.topAnchor===""?1:this.options.topAnchor,btm=this.options.btmAnchor===""?document.documentElement.scrollHeight:this.options.btmAnchor,pts=[top,btm],breaks={};for(var i=0,len=pts.length;i<len&&pts[i];i++){var pt;if(typeof pts[i]==='number'){pt=pts[i];}else{var place=pts[i].split(':'),anchor=jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));pt=anchor.offset().top;if(place[1]&&place[1].toLowerCase()==='bottom'){pt+=anchor[0].getBoundingClientRect().height;}}breaks[i]=pt;}this.points=breaks;return;}/**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_events",value:function _events(id){var _this=this,scrollListener=this.scrollListener="scroll.zf.".concat(id);if(this.isOn){return;}if(this.canStick){this.isOn=true;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener,function(){if(_this.scrollCount===0){_this.scrollCount=_this.options.checkEvery;_this._setSizes(function(){_this._calc(false,window.pageYOffset);});}else{_this.scrollCount--;_this._calc(false,window.pageYOffset);}});}this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger',function(){_this._eventsHandler(id);});this.$element.on('mutateme.zf.trigger',function(){_this._eventsHandler(id);});if(this.$anchor){this.$anchor.on('mutateme.zf.trigger',function(){_this._eventsHandler(id);});}}/**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_eventsHandler",value:function _eventsHandler(id){var _this=this,scrollListener=this.scrollListener="scroll.zf.".concat(id);_this._setSizes(function(){_this._calc(false);if(_this.canStick){if(!_this.isOn){_this._events(id);}}else if(_this.isOn){_this._pauseListeners(scrollListener);}});}/**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */},{key:"_pauseListeners",value:function _pauseListeners(scrollListener){this.isOn=false;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);/**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */this.$element.trigger('pause.zf.sticky');}/**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */},{key:"_calc",value:function _calc(checkSizes,scroll){if(checkSizes){this._setSizes();}if(!this.canStick){if(this.isStuck){this._removeSticky(true);}return false;}if(!scroll){scroll=window.pageYOffset;}if(scroll>=this.topPoint){if(scroll<=this.bottomPoint){if(!this.isStuck){this._setSticky();}}else{if(this.isStuck){this._removeSticky(false);}}}else{if(this.isStuck){this._removeSticky(true);}}}/**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */},{key:"_setSticky",value:function _setSticky(){var _this=this,stickTo=this.options.stickTo,mrgn=stickTo==='top'?'marginTop':'marginBottom',notStuckTo=stickTo==='top'?'bottom':'top',css={};css[mrgn]="".concat(this.options[mrgn],"em");css[stickTo]=0;css[notStuckTo]='auto';this.isStuck=true;this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)/**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */.trigger("sticky.zf.stuckto:".concat(stickTo));this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){_this._setSizes();});}/**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */},{key:"_removeSticky",value:function _removeSticky(isTop){var stickTo=this.options.stickTo,stickToTop=stickTo==='top',css={},anchorPt=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,mrgn=stickToTop?'marginTop':'marginBottom',topOrBottom=isTop?'top':'bottom';css[mrgn]=0;css.bottom='auto';if(isTop){css.top=0;}else{css.top=anchorPt;}this.isStuck=false;this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)/**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */.trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));}/**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */},{key:"_setSizes",value:function _setSizes(cb){this.canStick=_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__.MediaQuery.is(this.options.stickyOn);if(!this.canStick){if(cb&&typeof cb==='function'){cb();}}var newElemWidth=this.$container[0].getBoundingClientRect().width,comp=window.getComputedStyle(this.$container[0]),pdngl=parseInt(comp['padding-left'],10),pdngr=parseInt(comp['padding-right'],10);if(this.$anchor&&this.$anchor.length){this.anchorHeight=this.$anchor[0].getBoundingClientRect().height;}else{this._parsePoints();}this.$element.css({'max-width':"".concat(newElemWidth-pdngl-pdngr,"px")});// Recalculate the height only if it is "dynamic"
if(this.options.dynamicHeight||!this.containerHeight){// Get the sticked element height and apply it to the container to "hold the place"
var newContainerHeight=this.$element[0].getBoundingClientRect().height||this.containerHeight;newContainerHeight=this.$element.css("display")==="none"?0:newContainerHeight;this.$container.css('height',newContainerHeight);this.containerHeight=newContainerHeight;}this.elemHeight=this.containerHeight;if(!this.isStuck){if(this.$element.hasClass('is-at-bottom')){var anchorPt=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css('top',anchorPt);}}this._setBreakPoints(this.containerHeight,function(){if(cb&&typeof cb==='function'){cb();}});}/**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */},{key:"_setBreakPoints",value:function _setBreakPoints(elemHeight,cb){if(!this.canStick){if(cb&&typeof cb==='function'){cb();}else{return false;}}var mTop=emCalc(this.options.marginTop),mBtm=emCalc(this.options.marginBottom),topPoint=this.points?this.points[0]:this.$anchor.offset().top,bottomPoint=this.points?this.points[1]:topPoint+this.anchorHeight,// topPoint = this.$anchor.offset().top || this.points[0],
// bottomPoint = topPoint + this.anchorHeight || this.points[1],
winHeight=window.innerHeight;if(this.options.stickTo==='top'){topPoint-=mTop;bottomPoint-=elemHeight+mTop;}else if(this.options.stickTo==='bottom'){topPoint-=winHeight-(elemHeight+mBtm);bottomPoint-=winHeight-mBtm;}else{//this would be the stickTo: both option... tricky
}this.topPoint=topPoint;this.bottomPoint=bottomPoint;if(cb&&typeof cb==='function'){cb();}}/**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */},{key:"_destroy",value:function _destroy(){this._removeSticky(true);this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:'',top:'',bottom:'','max-width':''}).off('resizeme.zf.trigger').off('mutateme.zf.trigger');if(this.$anchor&&this.$anchor.length){this.$anchor.off('change.zf.sticky');}if(this.scrollListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);if(this.onLoadListener)jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);if(this.wasWrapped){this.$element.unwrap();}else{this.$container.removeClass(this.options.containerClass).css({height:''});}}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);_Sticky.defaults={/**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */container:'<div data-sticky-container></div>',/**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */stickTo:'top',/**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */anchor:'',/**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */topAnchor:'',/**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */btmAnchor:'',/**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */marginTop:1,/**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */marginBottom:1,/**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */stickyOn:'medium',/**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */stickyClass:'sticky',/**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */containerClass:'sticky-container',/**
   * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.
   * @option
   * @type {boolean}
   * @default true
   */dynamicHeight:true,/**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */checkEvery:-1};/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */function emCalc(em){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*em;}/***/}),/***/"./js/foundation.tabs.js":(/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************//***/function _js_foundationTabsJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Tabs:function Tabs(){return/* binding */_Tabs;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */var _Tabs=/*#__PURE__*/function(_Plugin){function Tabs(){_classCallCheck(this,Tabs);return _callSuper(this,Tabs,arguments);}_inherits(Tabs,_Plugin);return _createClass(Tabs,[{key:"_setup",value:/**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Tabs.defaults,this.$element.data(),options);this.className='Tabs';// ie9 back compat
this._init();_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('Tabs',{'ENTER':'open','SPACE':'open','ARROW_RIGHT':'next','ARROW_UP':'previous','ARROW_DOWN':'next','ARROW_LEFT':'previous'// 'TAB': 'next',
// 'SHIFT_TAB': 'previous'
});}/**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */},{key:"_init",value:function _init(){var _this2=this;var _this=this;this._isInitializing=true;this.$element.attr({'role':'tablist'});this.$tabTitles=this.$element.find(".".concat(this.options.linkClass));this.$tabContent=jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\"".concat(this.$element[0].id,"\"]"));this.$tabTitles.each(function(){var $elem=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$link=$elem.find('a'),isActive=$elem.hasClass("".concat(_this.options.linkActiveClass)),hash=$link.attr('data-tabs-target')||$link[0].hash.slice(1),linkId=$link[0].id?$link[0].id:"".concat(hash,"-label"),$tabContent=jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));$elem.attr({'role':'presentation'});$link.attr({'role':'tab','aria-controls':hash,'aria-selected':isActive,'id':linkId,'tabindex':isActive?'0':'-1'});$tabContent.attr({'role':'tabpanel','aria-labelledby':linkId});// Save up the initial hash to return to it later when going back in history
if(isActive){_this._initialAnchor="#".concat(hash);}if(!isActive){$tabContent.attr('aria-hidden','true');}if(isActive&&_this.options.autoFocus){_this.onLoadListener=(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({scrollTop:$elem.offset().top},_this.options.deepLinkSmudgeDelay,function(){$link.focus();});});}});if(this.options.matchHeight){var $images=this.$tabContent.find('img');if($images.length){(0,_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__.onImagesLoaded)($images,this._setHeight.bind(this));}else{this._setHeight();}}// Current context-bound function to open tabs on page load or history hashchange
this._checkDeepLink=function(){var anchor=window.location.hash;if(!anchor.length){// If we are still initializing and there is no anchor, then there is nothing to do
if(_this2._isInitializing)return;// Otherwise, move to the initial anchor
if(_this2._initialAnchor)anchor=_this2._initialAnchor;}var anchorNoHash=anchor.indexOf('#')>=0?anchor.slice(1):anchor;var $anchor=anchorNoHash&&jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(anchorNoHash));var $link=anchor&&_this2.$element.find("[href$=\"".concat(anchor,"\"],[data-tabs-target=\"").concat(anchorNoHash,"\"]")).first();// Whether the anchor element that has been found is part of this element
var isOwnAnchor=!!($anchor.length&&$link.length);if(isOwnAnchor){// If there is an anchor for the hash, select it
if($anchor&&$anchor.length&&$link&&$link.length){_this2.selectTab($anchor,true);}// Otherwise, collapse everything
else{_this2._collapse();}// Roll up a little to show the titles
if(_this2.options.deepLinkSmudge){var offset=_this2.$element.offset();jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({scrollTop:offset.top-_this2.options.deepLinkSmudgeOffset},_this2.options.deepLinkSmudgeDelay);}/**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */_this2.$element.trigger('deeplink.zf.tabs',[$link,$anchor]);}};//use browser to open a tab, if it exists in this tabset
if(this.options.deepLink){this._checkDeepLink();}this._events();this._isInitializing=false;}/**
     * Adds event handlers for items within the tabs.
     * @private
     */},{key:"_events",value:function _events(){this._addKeyHandler();this._addClickHandler();this._setHeightMqHandler=null;if(this.options.matchHeight){this._setHeightMqHandler=this._setHeight.bind(this);jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery',this._setHeightMqHandler);}if(this.options.deepLink){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange',this._checkDeepLink);}}/**
     * Adds click handlers for items within the tabs.
     * @private
     */},{key:"_addClickHandler",value:function _addClickHandler(){var _this=this;this.$element.off('click.zf.tabs').on('click.zf.tabs',".".concat(this.options.linkClass),function(e){e.preventDefault();_this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));});}/**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */},{key:"_addKeyHandler",value:function _addKeyHandler(){var _this=this;this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs',function(e){if(e.which===9)return;var $element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$elements=$element.parent('ul').children('li'),$prevElement,$nextElement;$elements.each(function(i){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)){if(_this.options.wrapOnKeys){$prevElement=i===0?$elements.last():$elements.eq(i-1);$nextElement=i===$elements.length-1?$elements.first():$elements.eq(i+1);}else{$prevElement=$elements.eq(Math.max(0,i-1));$nextElement=$elements.eq(Math.min(i+1,$elements.length-1));}return;}});// handle keyboard event with keyboard util
_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e,'Tabs',{open:function open(){$element.find('[role="tab"]').focus();_this._handleTabChange($element);},previous:function previous(){$prevElement.find('[role="tab"]').focus();_this._handleTabChange($prevElement);},next:function next(){$nextElement.find('[role="tab"]').focus();_this._handleTabChange($nextElement);},handled:function handled(){e.preventDefault();}});});}/**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */},{key:"_handleTabChange",value:function _handleTabChange($target,historyHandled){// With `activeCollapse`, if the target is the active Tab, collapse it.
if($target.hasClass("".concat(this.options.linkActiveClass))){if(this.options.activeCollapse){this._collapse();}return;}var $oldTab=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),$tabLink=$target.find('[role="tab"]'),target=$tabLink.attr('data-tabs-target'),anchor=target&&target.length?"#".concat(target):$tabLink[0].hash,$targetContent=this.$tabContent.find(anchor);//close old tab
this._collapseTab($oldTab);//open new tab
this._openTab($target);//either replace or update browser history
if(this.options.deepLink&&!historyHandled){if(this.options.updateHistory){history.pushState({},'',location.pathname+location.search+anchor);}else{history.replaceState({},'',location.pathname+location.search+anchor);}}/**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */this.$element.trigger('change.zf.tabs',[$target,$targetContent]);//fire to children a mutation event
$targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");}/**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */},{key:"_openTab",value:function _openTab($target){var $tabLink=$target.find('[role="tab"]'),hash=$tabLink.attr('data-tabs-target')||$tabLink[0].hash.slice(1),$targetContent=this.$tabContent.find("#".concat(hash));$target.addClass("".concat(this.options.linkActiveClass));$tabLink.attr({'aria-selected':'true','tabindex':'0'});$targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');}/**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */},{key:"_collapseTab",value:function _collapseTab($target){var $targetAnchor=$target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({'aria-selected':'false','tabindex':-1});jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($targetAnchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({'aria-hidden':'true'});}/**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */},{key:"_collapse",value:function _collapse(){var $activeTab=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));if($activeTab.length){this._collapseTab($activeTab);/**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */this.$element.trigger('collapse.zf.tabs',[$activeTab]);}}/**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */},{key:"selectTab",value:function selectTab(elem,historyHandled){var idStr,hashIdStr;if(_typeof(elem)==='object'){idStr=elem[0].id;}else{idStr=elem;}if(idStr.indexOf('#')<0){hashIdStr="#".concat(idStr);}else{hashIdStr=idStr;idStr=idStr.slice(1);}var $target=this.$tabTitles.has("[href$=\"".concat(hashIdStr,"\"],[data-tabs-target=\"").concat(idStr,"\"]")).first();this._handleTabChange($target,historyHandled);}},{key:"_setHeight",value:/**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */function _setHeight(){var max=0,_this=this;// Lock down the `this` value for the root tabs object
if(!this.$tabContent){return;}this.$tabContent.find(".".concat(this.options.panelClass)).css('min-height','').each(function(){var panel=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),isActive=panel.hasClass("".concat(_this.options.panelActiveClass));// get the options from the parent instead of trying to get them from the child
if(!isActive){panel.css({'visibility':'hidden','display':'block'});}var temp=this.getBoundingClientRect().height;if(!isActive){panel.css({'visibility':'','display':''});}max=temp>max?temp:max;}).css('min-height',"".concat(max,"px"));}/**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */},{key:"_destroy",value:function _destroy(){this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();if(this.options.matchHeight){if(this._setHeightMqHandler!=null){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery',this._setHeightMqHandler);}}if(this.options.deepLink){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange',this._checkDeepLink);}if(this.onLoadListener){jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);}}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);_Tabs.defaults={/**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */deepLink:false,/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */deepLinkSmudge:false,/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */deepLinkSmudgeDelay:300,/**
   * If `deepLinkSmudge` is enabled, animation offset from the top for the deep link adjustment
   * @option
   * @type {number}
   * @default 0
   */deepLinkSmudgeOffset:0,/**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */updateHistory:false,/**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */autoFocus:false,/**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */wrapOnKeys:true,/**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */matchHeight:false,/**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */activeCollapse:false,/**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */linkClass:'tabs-title',/**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */linkActiveClass:'is-active',/**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */panelClass:'tabs-panel',/**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */panelActiveClass:'is-active'};/***/}),/***/"./js/foundation.toggler.js":(/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************//***/function _js_foundationTogglerJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Toggler:function Toggler(){return/* binding */_Toggler;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.util.motion */"./js/foundation.util.motion.js");/* harmony import */var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */var _Toggler=/*#__PURE__*/function(_Plugin){function Toggler(){_classCallCheck(this,Toggler);return _callSuper(this,Toggler,arguments);}_inherits(Toggler,_Plugin);return _createClass(Toggler,[{key:"_setup",value:/**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Toggler.defaults,element.data(),options);this.className='';this.className='Toggler';// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();this._events();}/**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */},{key:"_init",value:function _init(){// Collect triggers to set ARIA attributes to
var id=this.$element[0].id,$triggers=jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open~=\"".concat(id,"\"], [data-close~=\"").concat(id,"\"], [data-toggle~=\"").concat(id,"\"]"));var input;// Parse animation classes if they were set
if(this.options.animate){input=this.options.animate.split(' ');this.animationIn=input[0];this.animationOut=input[1]||null;// - aria-expanded: according to the element visibility.
$triggers.attr('aria-expanded',!this.$element.is(':hidden'));}// Otherwise, parse toggle class
else{input=this.options.toggler;if(typeof input!=='string'||!input.length){throw new Error("The 'toggler' option containing the target class is required, got \"".concat(input,"\""));}// Allow for a . at the beginning of the string
this.className=input[0]==='.'?input.slice(1):input;// - aria-expanded: according to the elements class set.
$triggers.attr('aria-expanded',this.$element.hasClass(this.className));}// - aria-controls: adding the element id to it if not already in it.
$triggers.each(function(index,trigger){var $trigger=jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);var controls=$trigger.attr('aria-controls')||'';var containsId=new RegExp("\\b".concat((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.RegExpEscape)(id),"\\b")).test(controls);if(!containsId)$trigger.attr('aria-controls',controls?"".concat(controls," ").concat(id):id);});}/**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */},{key:"_events",value:function _events(){this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger',this.toggle.bind(this));}/**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */},{key:"toggle",value:function toggle(){this[this.options.animate?'_toggleAnimate':'_toggleClass']();}},{key:"_toggleClass",value:function _toggleClass(){this.$element.toggleClass(this.className);var isOn=this.$element.hasClass(this.className);if(isOn){/**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */this.$element.trigger('on.zf.toggler');}else{/**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */this.$element.trigger('off.zf.toggler');}this._updateARIA(isOn);this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');}},{key:"_toggleAnimate",value:function _toggleAnimate(){var _this=this;if(this.$element.is(':hidden')){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__.Motion.animateIn(this.$element,this.animationIn,function(){_this._updateARIA(true);this.trigger('on.zf.toggler');this.find('[data-mutate]').trigger('mutateme.zf.trigger');});}else{_foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__.Motion.animateOut(this.$element,this.animationOut,function(){_this._updateARIA(false);this.trigger('off.zf.toggler');this.find('[data-mutate]').trigger('mutateme.zf.trigger');});}}},{key:"_updateARIA",value:function _updateARIA(isOn){var id=this.$element[0].id;jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(id,"\"], [data-close=\"").concat(id,"\"], [data-toggle=\"").concat(id,"\"]")).attr({'aria-expanded':isOn?true:false});}/**
     * Destroys the instance of Toggler on the element.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$element.off('.zf.toggler');}}]);}(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__.Plugin);_Toggler.defaults={/**
   * Class of the element to toggle. It can be provided with or without "."
   * @option
   * @type {string}
   */toggler:undefined,/**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */animate:false};/***/}),/***/"./js/foundation.tooltip.js":(/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************//***/function _js_foundationTooltipJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Tooltip:function Tooltip(){return/* binding */_Tooltip;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js");/* harmony import */var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./foundation.positionable */"./js/foundation.positionable.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}function _callSuper(t,o,e){return o=_getPrototypeOf(o),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e));}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}function _superPropGet(t,e,o,r){var p=_get(_getPrototypeOf(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t);}:p;}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var p=_superPropBase(e,t);if(p){var n=Object.getOwnPropertyDescriptor(p,t);return n.get?n.get.call(arguments.length<3?e:r):n.value;}},_get.apply(null,arguments);}function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=_getPrototypeOf(t)););return t;}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t);},_getPrototypeOf(t);}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */var _Tooltip=/*#__PURE__*/function(_Positionable){function Tooltip(){_classCallCheck(this,Tooltip);return _callSuper(this,Tooltip,arguments);}_inherits(Tooltip,_Positionable);return _createClass(Tooltip,[{key:"_setup",value:/**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */function _setup(element,options){this.$element=element;this.options=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},Tooltip.defaults,this.$element.data(),options);this.className='Tooltip';// ie9 back compat
this.isActive=false;this.isClick=false;// Triggers init is idempotent, just need to make sure it is initialized
_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());this._init();}/**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */},{key:"_init",value:function _init(){_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery._init();var elemId=this.$element.attr('aria-describedby')||(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.GetYoDigits)(6,'tooltip');this.options.tipText=this.options.tipText||this.$element.attr('title');this.template=this.options.template?jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template):this._buildTemplate(elemId);if(this.options.allowHtml){this.template.appendTo(document.body).html(this.options.tipText).hide();}else{this.template.appendTo(document.body).text(this.options.tipText).hide();}this.$element.attr({'title':'','aria-describedby':elemId,'data-yeti-box':elemId,'data-toggle':elemId,'data-resize':elemId}).addClass(this.options.triggerClass);_superPropGet(Tooltip,"_init",this,3)([]);this._events();}},{key:"_getDefaultPosition",value:function _getDefaultPosition(){// handle legacy classnames
var elementClassName=this.$element[0].className;if(this.$element[0]instanceof SVGElement){elementClassName=elementClassName.baseVal;}var position=elementClassName.match(/\b(top|left|right|bottom)\b/g);return position?position[0]:'top';}},{key:"_getDefaultAlignment",value:function _getDefaultAlignment(){return'center';}},{key:"_getHOffset",value:function _getHOffset(){if(this.position==='left'||this.position==='right'){return this.options.hOffset+this.options.tooltipWidth;}else{return this.options.hOffset;}}},{key:"_getVOffset",value:function _getVOffset(){if(this.position==='top'||this.position==='bottom'){return this.options.vOffset+this.options.tooltipHeight;}else{return this.options.vOffset;}}/**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */},{key:"_buildTemplate",value:function _buildTemplate(id){var templateClasses="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim();var $template=jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({'role':'tooltip','aria-hidden':true,'data-is-active':false,'data-is-focus':false,'id':id});return $template;}/**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */},{key:"_setPosition",value:function _setPosition(){_superPropGet(Tooltip,"_setPosition",this,3)([this.$element,this.template]);}/**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */},{key:"show",value:function show(){if(this.options.showOn!=='all'&&!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery.is(this.options.showOn)){// console.error('The screen is too small to display this tooltip');
return false;}var _this=this;this.template.css('visibility','hidden').show();this._setPosition();this.template.removeClass('top bottom left right').addClass(this.position);this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-'+this.alignment);/**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */this.$element.trigger('closeme.zf.tooltip',this.template.attr('id'));this.template.attr({'data-is-active':true,'aria-hidden':false});_this.isActive=true;this.template.stop().hide().css('visibility','').fadeIn(this.options.fadeInDuration,function(){//maybe do stuff?
});/**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */this.$element.trigger('show.zf.tooltip');}/**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */},{key:"hide",value:function hide(){var _this=this;this.template.stop().attr({'aria-hidden':true,'data-is-active':false}).fadeOut(this.options.fadeOutDuration,function(){_this.isActive=false;_this.isClick=false;});/**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */this.$element.trigger('hide.zf.tooltip');}/**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */},{key:"_events",value:function _events(){var _this=this;var hasTouch='ontouchstart'in window||typeof window.ontouchstart!=='undefined';var isFocus=false;// `disableForTouch: Fully disable the tooltip on touch devices
if(hasTouch&&this.options.disableForTouch)return;if(!this.options.disableHover){this.$element.on('mouseenter.zf.tooltip',function(){if(!_this.isActive){_this.timeout=setTimeout(function(){_this.show();},_this.options.hoverDelay);}}).on('mouseleave.zf.tooltip',(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.ignoreMousedisappear)(function(){clearTimeout(_this.timeout);if(!isFocus||_this.isClick&&!_this.options.clickOpen){_this.hide();}}));}if(hasTouch){this.$element.on('tap.zf.tooltip touchend.zf.tooltip',function(){_this.isActive?_this.hide():_this.show();});}if(this.options.clickOpen){this.$element.on('mousedown.zf.tooltip',function(){if(_this.isClick){//_this.hide();
// _this.isClick = false;
}else{_this.isClick=true;if((_this.options.disableHover||!_this.$element.attr('tabindex'))&&!_this.isActive){_this.show();}}});}else{this.$element.on('mousedown.zf.tooltip',function(){_this.isClick=true;});}this.$element.on({// 'toggle.zf.trigger': this.toggle.bind(this),
// 'close.zf.trigger': this.hide.bind(this)
'close.zf.trigger':this.hide.bind(this)});this.$element.on('focus.zf.tooltip',function(){isFocus=true;if(_this.isClick){// If we're not showing open on clicks, we need to pretend a click-launched focus isn't
// a real focus, otherwise on hover and come back we get bad behavior
if(!_this.options.clickOpen){isFocus=false;}return false;}else{_this.show();}}).on('focusout.zf.tooltip',function(){isFocus=false;_this.isClick=false;_this.hide();}).on('resizeme.zf.trigger',function(){if(_this.isActive){_this._setPosition();}});}/**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */},{key:"toggle",value:function toggle(){if(this.isActive){this.hide();}else{this.show();}}/**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */},{key:"_destroy",value:function _destroy(){this.$element.attr('title',this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');this.template.remove();}}]);}(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__.Positionable);_Tooltip.defaults={/**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */hoverDelay:200,/**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */fadeInDuration:150,/**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */fadeOutDuration:150,/**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */disableHover:false,/**
   * Disable the tooltip for touch devices.
   * This can be useful to make elements with a tooltip on it trigger their
   * action on the first tap instead of displaying the tooltip.
   * @option
   * @type {booelan}
   * @default false
   */disableForTouch:false,/**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */templateClasses:'',/**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */tooltipClass:'tooltip',/**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */triggerClass:'has-tip',/**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */showOn:'small',/**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */template:'',/**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */tipText:'',touchCloseText:'Tap to close.',/**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */clickOpen:true,/**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */position:'auto',/**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */alignment:'auto',/**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */allowOverlap:false,/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */allowBottomOverlap:false,/**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */vOffset:0,/**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */hOffset:0,/**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */tooltipHeight:14,/**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */tooltipWidth:12,/**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */allowHtml:false};/**
 * TODO utilize resize event trigger
 *//***/}),/***/"./js/foundation.util.box.js":(/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************//***/function _js_foundationUtilBoxJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Box:function Box(){return/* binding */_Box;}/* harmony export */});var _Box={ImNotTouchingYou:ImNotTouchingYou,OverlapArea:OverlapArea,GetDimensions:GetDimensions,GetExplicitOffsets:GetExplicitOffsets};/**
 * Compares the dimensions of an element to a container and determines collision events with container.
 * @function
 * @param {jQuery} element - jQuery object to test for collisions.
 * @param {jQuery} parent - jQuery object to use as bounding container.
 * @param {Boolean} lrOnly - set to true to check left and right values only.
 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
 * @default if no parent object passed, detects collisions with `window`.
 * @returns {Boolean} - true if collision free, false if a collision in any direction.
 */function ImNotTouchingYou(element,parent,lrOnly,tbOnly,ignoreBottom){return OverlapArea(element,parent,lrOnly,tbOnly,ignoreBottom)===0;}function OverlapArea(element,parent,lrOnly,tbOnly,ignoreBottom){var eleDims=GetDimensions(element),topOver,bottomOver,leftOver,rightOver;if(parent){var parDims=GetDimensions(parent);bottomOver=parDims.height+parDims.offset.top-(eleDims.offset.top+eleDims.height);topOver=eleDims.offset.top-parDims.offset.top;leftOver=eleDims.offset.left-parDims.offset.left;rightOver=parDims.width+parDims.offset.left-(eleDims.offset.left+eleDims.width);}else{bottomOver=eleDims.windowDims.height+eleDims.windowDims.offset.top-(eleDims.offset.top+eleDims.height);topOver=eleDims.offset.top-eleDims.windowDims.offset.top;leftOver=eleDims.offset.left-eleDims.windowDims.offset.left;rightOver=eleDims.windowDims.width-(eleDims.offset.left+eleDims.width);}bottomOver=ignoreBottom?0:Math.min(bottomOver,0);topOver=Math.min(topOver,0);leftOver=Math.min(leftOver,0);rightOver=Math.min(rightOver,0);if(lrOnly){return leftOver+rightOver;}if(tbOnly){return topOver+bottomOver;}// use sum of squares b/c we care about overlap area.
return Math.sqrt(topOver*topOver+bottomOver*bottomOver+leftOver*leftOver+rightOver*rightOver);}/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */function GetDimensions(elem){elem=elem.length?elem[0]:elem;if(elem===window||elem===document){throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");}var rect=elem.getBoundingClientRect(),parRect=elem.parentNode.getBoundingClientRect(),winRect=document.body.getBoundingClientRect(),winY=window.pageYOffset,winX=window.pageXOffset;return{width:rect.width,height:rect.height,offset:{top:rect.top+winY,left:rect.left+winX},parentDims:{width:parRect.width,height:parRect.height,offset:{top:parRect.top+winY,left:parRect.left+winX}},windowDims:{width:winRect.width,height:winRect.height,offset:{top:winY,left:winX}}};}/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */function GetExplicitOffsets(element,anchor,position,alignment,vOffset,hOffset,isOverflow){var $eleDims=GetDimensions(element),$anchorDims=anchor?GetDimensions(anchor):null;var topVal,leftVal;if($anchorDims!==null){// set position related attribute
switch(position){case'top':topVal=$anchorDims.offset.top-($eleDims.height+vOffset);break;case'bottom':topVal=$anchorDims.offset.top+$anchorDims.height+vOffset;break;case'left':leftVal=$anchorDims.offset.left-($eleDims.width+hOffset);break;case'right':leftVal=$anchorDims.offset.left+$anchorDims.width+hOffset;break;}// set alignment related attribute
switch(position){case'top':case'bottom':switch(alignment){case'left':leftVal=$anchorDims.offset.left+hOffset;break;case'right':leftVal=$anchorDims.offset.left-$eleDims.width+$anchorDims.width-hOffset;break;case'center':leftVal=isOverflow?hOffset:$anchorDims.offset.left+$anchorDims.width/2-$eleDims.width/2+hOffset;break;}break;case'right':case'left':switch(alignment){case'bottom':topVal=$anchorDims.offset.top-vOffset+$anchorDims.height-$eleDims.height;break;case'top':topVal=$anchorDims.offset.top+vOffset;break;case'center':topVal=$anchorDims.offset.top+vOffset+$anchorDims.height/2-$eleDims.height/2;break;}break;}}return{top:topVal,left:leftVal};}/***/}),/***/"./js/foundation.util.imageLoader.js":(/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************//***/function _js_foundationUtilImageLoaderJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */onImagesLoaded:function onImagesLoaded(){return/* binding */_onImagesLoaded;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */function _onImagesLoaded(images,callback){var unloaded=images.length;if(unloaded===0){callback();}images.each(function(){// Check if image is loaded
if(this.complete&&typeof this.naturalWidth!=='undefined'){singleImageLoaded();}else{// If the above check failed, simulate loading on detached element.
var image=new Image();// Still count image as loaded if it finalizes with an error.
var events="load.zf.images error.zf.images";jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events,function me(){// Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events,me);singleImageLoaded();});image.src=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');}});function singleImageLoaded(){unloaded--;if(unloaded===0){callback();}}}/***/}),/***/"./js/foundation.util.keyboard.js":(/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************//***/function _js_foundationUtilKeyboardJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Keyboard:function Keyboard(){return/* binding */_Keyboard;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/var keyCodes={9:'TAB',13:'ENTER',27:'ESCAPE',32:'SPACE',35:'END',36:'HOME',37:'ARROW_LEFT',38:'ARROW_UP',39:'ARROW_RIGHT',40:'ARROW_DOWN'};var commands={};// Functions pulled out to be referenceable from internals
function findFocusable($element){if(!$element){return false;}return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function(){if(!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible')||jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex')<0){return false;}//only have visible elements and those that have a tabindex greater or equal 0
return true;}).sort(function(a,b){if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex')===jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex')){return 0;}var aTabIndex=parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex'),10),bTabIndex=parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex'),10);// Undefined is treated the same as 0
if(typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex')==='undefined'&&bTabIndex>0){return 1;}if(typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex')==='undefined'&&aTabIndex>0){return-1;}if(aTabIndex===0&&bTabIndex>0){return 1;}if(bTabIndex===0&&aTabIndex>0){return-1;}if(aTabIndex<bTabIndex){return-1;}if(aTabIndex>bTabIndex){return 1;}});}function parseKey(event){var key=keyCodes[event.which||event.keyCode]||String.fromCharCode(event.which).toUpperCase();// Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
key=key.replace(/\W+/,'');if(event.shiftKey)key="SHIFT_".concat(key);if(event.ctrlKey)key="CTRL_".concat(key);if(event.altKey)key="ALT_".concat(key);// Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
key=key.replace(/_$/,'');return key;}var _Keyboard={keys:getKeyCodes(keyCodes),/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */parseKey:parseKey,/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */handleKey:function handleKey(event,component,functions){var commandList=commands[component],keyCode=this.parseKey(event),cmds,command,fn;if(!commandList)return console.warn('Component not defined!');// Ignore the event if it was already handled
if(event.zfIsKeyHandled===true)return;// This component does not differentiate between ltr and rtl
if(typeof commandList.ltr==='undefined'){cmds=commandList;// use plain list
}else{// merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
if((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.rtl)())cmds=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},commandList.ltr,commandList.rtl);else cmds=jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({},commandList.rtl,commandList.ltr);}command=cmds[keyCode];fn=functions[command];// Execute the handler if found
if(fn&&typeof fn==='function'){var returnValue=fn.apply();// Mark the event as "handled" to prevent future handlings
event.zfIsKeyHandled=true;// Execute function when event was handled
if(functions.handled||typeof functions.handled==='function'){functions.handled(returnValue);}}else{// Execute function when event was not handled
if(functions.unhandled||typeof functions.unhandled==='function'){functions.unhandled();}}},/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */findFocusable:findFocusable,/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */register:function register(componentName,cmds){commands[componentName]=cmds;},// TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
//
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */trapFocus:function trapFocus($element){var $focusable=findFocusable($element),$firstFocusable=$focusable.eq(0),$lastFocusable=$focusable.eq(-1);$element.on('keydown.zf.trapfocus',function(event){if(event.target===$lastFocusable[0]&&parseKey(event)==='TAB'){event.preventDefault();$firstFocusable.focus();}else if(event.target===$firstFocusable[0]&&parseKey(event)==='SHIFT_TAB'){event.preventDefault();$lastFocusable.focus();}});},/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */releaseFocus:function releaseFocus($element){$element.off('keydown.zf.trapfocus');}};/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */function getKeyCodes(kcs){var k={};for(var kc in kcs){if(kcs.hasOwnProperty(kc))k[kcs[kc]]=kcs[kc];}return k;}/***/}),/***/"./js/foundation.util.mediaQuery.js":(/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************//***/function _js_foundationUtilMediaQueryJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */MediaQuery:function MediaQuery(){return/* binding */_MediaQuery;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0;}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n;}function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1;}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r;}finally{try{if(!f&&null!=t["return"]&&(u=t["return"](),Object(u)!==u))return;}finally{if(o)throw n;}}return a;}}function _arrayWithHoles(r){if(Array.isArray(r))return r;}// Default set of media queries
// const defaultQueries = {
//   'default' : 'only screen',
//   landscape : 'only screen and (orientation: landscape)',
//   portrait : 'only screen and (orientation: portrait)',
//   retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
//     'only screen and (min--moz-device-pixel-ratio: 2),' +
//     'only screen and (-o-min-device-pixel-ratio: 2/1),' +
//     'only screen and (min-device-pixel-ratio: 2),' +
//     'only screen and (min-resolution: 192dpi),' +
//     'only screen and (min-resolution: 2dppx)'
//   };
// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright © 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license
/* eslint-disable */window.matchMedia||(window.matchMedia=function(){"use strict";// For browsers that support matchMedium api such as IE 9 and webkit
var styleMedia=window.styleMedia||window.media;// For those that don't support matchMedium
if(!styleMedia){var style=document.createElement('style'),script=document.getElementsByTagName('script')[0],info=null;style.type='text/css';style.id='matchmediajs-test';if(!script){document.head.appendChild(style);}else{script.parentNode.insertBefore(style,script);}// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
info='getComputedStyle'in window&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function matchMedium(media){var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
if(style.styleSheet){style.styleSheet.cssText=text;}else{style.textContent=text;}// Test if media query is true or false
return info.width==='1px';}};}return function(media){return{matches:styleMedia.matchMedium(media||'all'),media:media||'all'};};}());/* eslint-enable */var _MediaQuery={queries:[],current:'',/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */_init:function _init(){// make sure the initialization is only done once when calling _init() several times
if(this.isInitialized===true){return this;}else{this.isInitialized=true;}var self=this;var $meta=jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');if(!$meta.length){jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);}var extractedStyles=jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');var namedQueries;namedQueries=parseStyleToObject(extractedStyles);self.queries=[];// reset
for(var key in namedQueries){if(namedQueries.hasOwnProperty(key)){self.queries.push({name:key,value:"only screen and (min-width: ".concat(namedQueries[key],")")});}}this.current=this._getCurrentSize();this._watcher();},/**
   * Reinitializes the media query helper.
   * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.
   * @function
   * @private
   */_reInit:function _reInit(){this.isInitialized=false;this._init();},/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */atLeast:function atLeast(size){var query=this.get(size);if(query){return window.matchMedia(query).matches;}return false;},/**
   * Checks if the screen is within the given breakpoint.
   * If smaller than the breakpoint of larger than its upper limit it returns false.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.
   */only:function only(size){return size===this._getCurrentSize();},/**
   * Checks if the screen is within a breakpoint or smaller.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.
   */upTo:function upTo(size){var nextSize=this.next(size);// If the next breakpoint does not match, the screen is smaller than
// the upper limit of this breakpoint.
if(nextSize){return!this.atLeast(nextSize);}// If there is no next breakpoint, the "size" breakpoint does not have
// an upper limit and the screen will always be within it or smaller.
return true;},/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */is:function is(size){var parts=size.trim().split(' ').filter(function(p){return!!p.length;});var _parts=_slicedToArray(parts,2),bpSize=_parts[0],_parts$=_parts[1],bpModifier=_parts$===void 0?'':_parts$;// Only the breakpont
if(bpModifier==='only'){return this.only(bpSize);}// At least the breakpoint (included)
if(!bpModifier||bpModifier==='up'){return this.atLeast(bpSize);}// Up to the breakpoint (included)
if(bpModifier==='down'){return this.upTo(bpSize);}throw new Error("\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like \"<size> <modifier>\", got \"".concat(size,"\".\n    "));},/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */get:function get(size){for(var i in this.queries){if(this.queries.hasOwnProperty(i)){var query=this.queries[i];if(size===query.name)return query.value;}}return null;},/**
   * Get the breakpoint following the given breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint.
   * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.
   */next:function next(size){var _this=this;var queryIndex=this.queries.findIndex(function(q){return _this._getQueryName(q)===size;});if(queryIndex===-1){throw new Error("\n        Unknown breakpoint \"".concat(size,"\" passed to MediaQuery.next().\n        Ensure it is present in your Sass \"$breakpoints\" setting.\n      "));}var nextQuery=this.queries[queryIndex+1];return nextQuery?nextQuery.name:null;},/**
   * Returns the name of the breakpoint related to the given value.
   * @function
   * @private
   * @param {String|Object} value - Breakpoint name or query object.
   * @returns {String} Name of the breakpoint.
   */_getQueryName:function _getQueryName(value){if(typeof value==='string')return value;if(_typeof(value)==='object')return value.name;throw new TypeError("\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got \"".concat(value,"\" (").concat(_typeof(value),")\n    "));},/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */_getCurrentSize:function _getCurrentSize(){var matched;for(var i=0;i<this.queries.length;i++){var query=this.queries[i];if(window.matchMedia(query.value).matches){matched=query;}}return matched&&this._getQueryName(matched);},/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */_watcher:function _watcher(){var _this2=this;jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize.zf.trigger',function(){var newSize=_this2._getCurrentSize(),currentSize=_this2.current;if(newSize!==currentSize){// Change the current media query
_this2.current=newSize;// Broadcast the media query change on the window
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery',[newSize,currentSize]);}});}};// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str){var styleObject={};if(typeof str!=='string'){return styleObject;}str=str.trim().slice(1,-1);// browsers re-quote string style values
if(!str){return styleObject;}styleObject=str.split('&').reduce(function(ret,param){var parts=param.replace(/\+/g,' ').split('=');var key=parts[0];var val=parts[1];key=decodeURIComponent(key);// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
val=typeof val==='undefined'?null:decodeURIComponent(val);if(!ret.hasOwnProperty(key)){ret[key]=val;}else if(Array.isArray(ret[key])){ret[key].push(val);}else{ret[key]=[ret[key],val];}return ret;},{});return styleObject;}/***/}),/***/"./js/foundation.util.motion.js":(/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************//***/function _js_foundationUtilMotionJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Motion:function Motion(){return/* binding */_Motion;},/* harmony export */Move:function Move(){return/* binding */_Move;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/**
 * Motion module.
 * @module foundation.motion
 */var initClasses=['mui-enter','mui-leave'];var activeClasses=['mui-enter-active','mui-leave-active'];var _Motion={animateIn:function animateIn(element,animation,cb){animate(true,element,animation,cb);},animateOut:function animateOut(element,animation,cb){animate(false,element,animation,cb);}};function _Move(duration,elem,fn){var anim,prog,start=null;if(duration===0){fn.apply(elem);elem.trigger('finished.zf.animate',[elem]).triggerHandler('finished.zf.animate',[elem]);return;}function move(ts){if(!start)start=ts;prog=ts-start;fn.apply(elem);if(prog<duration){anim=window.requestAnimationFrame(move,elem);}else{window.cancelAnimationFrame(anim);elem.trigger('finished.zf.animate',[elem]).triggerHandler('finished.zf.animate',[elem]);}}anim=window.requestAnimationFrame(move);}/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */function animate(isIn,element,animation,cb){element=jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);if(!element.length)return;var initClass=isIn?initClasses[0]:initClasses[1];var activeClass=isIn?activeClasses[0]:activeClasses[1];// Set up the animation
reset();element.addClass(animation).css('transition','none');requestAnimationFrame(function(){element.addClass(initClass);if(isIn)element.show();});// Start the animation
requestAnimationFrame(function(){// will trigger the browser to synchronously calculate the style and layout
// also called reflow or layout thrashing
// see https://gist.github.com/paulirish/5d52fb081b3570c81e3a
element[0].offsetWidth;element.css('transition','').addClass(activeClass);});// Clean up the animation when it finishes
element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.transitionend)(element),finish);// Hides the element (for out animations), resets the element, and runs a callback
function finish(){if(!isIn)element.hide();reset();if(cb)cb.apply(element);}// Resets transitions and removes motion-specific classes
function reset(){element[0].style.transitionDuration=0;element.removeClass("".concat(initClass," ").concat(activeClass," ").concat(animation));}}/***/}),/***/"./js/foundation.util.nest.js":(/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************//***/function _js_foundationUtilNestJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Nest:function Nest(){return/* binding */_Nest;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);var _Nest={Feather:function Feather(menu){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'zf';menu.attr('role','menubar');menu.find('a').attr({'role':'menuitem'});var items=menu.find('li').attr({'role':'none'}),subMenuClass="is-".concat(type,"-submenu"),subItemClass="".concat(subMenuClass,"-item"),hasSubClass="is-".concat(type,"-submenu-parent"),applyAria=type!=='accordion';// Accordions handle their own ARIA attriutes.
items.each(function(){var $item=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),$sub=$item.children('ul');if($sub.length){$item.addClass(hasSubClass);if(applyAria){var firstItem=$item.children('a:first');firstItem.attr({'aria-haspopup':true,'aria-label':firstItem.attr('aria-label')||firstItem.text()});// Note:  Drilldowns behave differently in how they hide, and so need
// additional attributes.  We should look if this possibly over-generalized
// utility (Nest) is appropriate when we rework menus in 6.4
if(type==='drilldown'){$item.attr({'aria-expanded':false});}}$sub.addClass("submenu ".concat(subMenuClass)).attr({'data-submenu':'','role':'menubar'});if(type==='drilldown'){$sub.attr({'aria-hidden':true});}}if($item.parent('[data-submenu]').length){$item.addClass("is-submenu-item ".concat(subItemClass));}});return;},Burn:function Burn(menu,type){var//items = menu.find('li'),
subMenuClass="is-".concat(type,"-submenu"),subItemClass="".concat(subMenuClass,"-item"),hasSubClass="is-".concat(type,"-submenu-parent");menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass," ").concat(subItemClass," ").concat(hasSubClass," is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display','');}};/***/}),/***/"./js/foundation.util.timer.js":(/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************//***/function _js_foundationUtilTimerJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Timer:function Timer(){return/* binding */_Timer;}/* harmony export */});function _Timer(elem,options,cb){var _this=this,duration=options.duration,//options is an object for easily adding features later.
nameSpace=Object.keys(elem.data())[0]||'timer',remain=-1,start,timer;this.isPaused=false;this.restart=function(){remain=-1;clearTimeout(timer);this.start();};this.start=function(){this.isPaused=false;// if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(timer);remain=remain<=0?duration:remain;elem.data('paused',false);start=Date.now();timer=setTimeout(function(){if(options.infinite){_this.restart();//rerun the timer.
}if(cb&&typeof cb==='function'){cb();}},remain);elem.trigger("timerstart.zf.".concat(nameSpace));};this.pause=function(){this.isPaused=true;//if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(timer);elem.data('paused',true);var end=Date.now();remain=remain-(end-start);elem.trigger("timerpaused.zf.".concat(nameSpace));};}/***/}),/***/"./js/foundation.util.touch.js":(/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************//***/function _js_foundationUtilTouchJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Touch:function Touch(){return/* binding */_Touch;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function");}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o);}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
var _Touch={};var startPosX,startTime,elapsedTime,startEvent,isMoving=false,didMoved=false;function onTouchEnd(e){this.removeEventListener('touchmove',onTouchMove);this.removeEventListener('touchend',onTouchEnd);// If the touch did not move, consider it as a "tap"
if(!didMoved){var tapEvent=jquery__WEBPACK_IMPORTED_MODULE_0___default().Event('tap',startEvent||e);jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);}startEvent=null;isMoving=false;didMoved=false;}function onTouchMove(e){if(true===jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe.preventDefault){e.preventDefault();}if(isMoving){var x=e.touches[0].pageX;// var y = e.touches[0].pageY;
var dx=startPosX-x;// var dy = startPosY - y;
var dir;didMoved=true;elapsedTime=new Date().getTime()-startTime;if(Math.abs(dx)>=jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe.moveThreshold&&elapsedTime<=jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe.timeThreshold){dir=dx>0?'left':'right';}// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
//   dir = dy > 0 ? 'down' : 'up';
// }
if(dir){e.preventDefault();onTouchEnd.apply(this,arguments);jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event('swipe',Object.assign({},e)),dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event("swipe".concat(dir),Object.assign({},e)));}}}function onTouchStart(e){if(e.touches.length===1){startPosX=e.touches[0].pageX;startEvent=e;isMoving=true;didMoved=false;startTime=new Date().getTime();this.addEventListener('touchmove',onTouchMove,{passive:true===jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe.preventDefault});this.addEventListener('touchend',onTouchEnd,false);}}function init(){this.addEventListener&&this.addEventListener('touchstart',onTouchStart,{passive:true});}// function teardown() {
//   this.removeEventListener('touchstart', onTouchStart);
// }
var SpotSwipe=/*#__PURE__*/function(){function SpotSwipe(){_classCallCheck(this,SpotSwipe);this.version='1.0.0';this.enabled='ontouchstart'in document.documentElement;this.preventDefault=false;this.moveThreshold=75;this.timeThreshold=200;this._init();}return _createClass(SpotSwipe,[{key:"_init",value:function _init(){jquery__WEBPACK_IMPORTED_MODULE_0___default().event.special.swipe={setup:init};jquery__WEBPACK_IMPORTED_MODULE_0___default().event.special.tap={setup:init};jquery__WEBPACK_IMPORTED_MODULE_0___default().each(['left','up','down','right'],function(){jquery__WEBPACK_IMPORTED_MODULE_0___default().event.special["swipe".concat(this)]={setup:function setup(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('swipe',jquery__WEBPACK_IMPORTED_MODULE_0___default().noop);}};});}}]);}();/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/_Touch.setupSpotSwipe=function(){jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe=new SpotSwipe(jquery__WEBPACK_IMPORTED_MODULE_0___default());};/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/_Touch.setupTouchHandler=function(){jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.addTouch=function(){this.each(function(i,el){jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).bind('touchstart touchmove touchend touchcancel',function(event){//we pass the original event object because the jQuery event
//object is normalized to w3c specs and does not provide the TouchList
handleTouch(event);});});var handleTouch=function handleTouch(event){var touches=event.changedTouches,first=touches[0],eventTypes={touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup'},type=eventTypes[event.type],simulatedEvent;if('MouseEvent'in window&&typeof window.MouseEvent==='function'){simulatedEvent=new window.MouseEvent(type,{'bubbles':true,'cancelable':true,'screenX':first.screenX,'screenY':first.screenY,'clientX':first.clientX,'clientY':first.clientY});}else{simulatedEvent=document.createEvent('MouseEvent');simulatedEvent.initMouseEvent(type,true,true,window,1,first.screenX,first.screenY,first.clientX,first.clientY,false,false,false,false,0/*left*/,null);}first.target.dispatchEvent(simulatedEvent);};};};_Touch.init=function(){if(typeof jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe==='undefined'){_Touch.setupSpotSwipe(jquery__WEBPACK_IMPORTED_MODULE_0___default());_Touch.setupTouchHandler(jquery__WEBPACK_IMPORTED_MODULE_0___default());}};/***/}),/***/"./js/foundation.util.triggers.js":(/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************//***/function _js_foundationUtilTriggersJs(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Triggers:function Triggers(){return/* binding */_Triggers;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./foundation.util.motion */"./js/foundation.util.motion.js");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}var MutationObserver=function(){var prefixes=['WebKit','Moz','O','Ms',''];for(var i=0;i<prefixes.length;i++){if("".concat(prefixes[i],"MutationObserver")in window){return window["".concat(prefixes[i],"MutationObserver")];}}return false;}();var triggers=function triggers(el,type){el.data(type).split(' ').forEach(function(id){jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type==='close'?'trigger':'triggerHandler']("".concat(type,".zf.trigger"),[el]);});};var _Triggers={Listeners:{Basic:{},Global:{}},Initializers:{}};_Triggers.Listeners.Basic={openListener:function openListener(){triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),'open');},closeListener:function closeListener(){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');if(id){triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),'close');}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');}},toggleListener:function toggleListener(){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');if(id){triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),'toggle');}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');}},closeableListener:function closeableListener(e){var animation=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');// Only close the first closable element. See https://git.io/zf-7833
e.stopPropagation();if(animation!==''){_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),animation,function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');});}else{jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');}},toggleFocusListener:function toggleFocusListener(){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger',[jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);}};// Elements with [data-open] will reveal a plugin that supports it when clicked.
_Triggers.Initializers.addOpenListener=function($elem){$elem.off('click.zf.trigger',_Triggers.Listeners.Basic.openListener);$elem.on('click.zf.trigger','[data-open]',_Triggers.Listeners.Basic.openListener);};// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
_Triggers.Initializers.addCloseListener=function($elem){$elem.off('click.zf.trigger',_Triggers.Listeners.Basic.closeListener);$elem.on('click.zf.trigger','[data-close]',_Triggers.Listeners.Basic.closeListener);};// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
_Triggers.Initializers.addToggleListener=function($elem){$elem.off('click.zf.trigger',_Triggers.Listeners.Basic.toggleListener);$elem.on('click.zf.trigger','[data-toggle]',_Triggers.Listeners.Basic.toggleListener);};// Elements with [data-closable] will respond to close.zf.trigger events.
_Triggers.Initializers.addCloseableListener=function($elem){$elem.off('close.zf.trigger',_Triggers.Listeners.Basic.closeableListener);$elem.on('close.zf.trigger','[data-closeable], [data-closable]',_Triggers.Listeners.Basic.closeableListener);};// Elements with [data-toggle-focus] will respond to coming in and out of focus
_Triggers.Initializers.addToggleFocusListener=function($elem){$elem.off('focus.zf.trigger blur.zf.trigger',_Triggers.Listeners.Basic.toggleFocusListener);$elem.on('focus.zf.trigger blur.zf.trigger','[data-toggle-focus]',_Triggers.Listeners.Basic.toggleFocusListener);};// More Global/complex listeners and triggers
_Triggers.Listeners.Global={resizeListener:function resizeListener($nodes){if(!MutationObserver){//fallback for IE 9
$nodes.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');});}//trigger all listening elements and signal a resize event
$nodes.attr('data-events',"resize");},scrollListener:function scrollListener($nodes){if(!MutationObserver){//fallback for IE 9
$nodes.each(function(){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');});}//trigger all listening elements and signal a scroll event
$nodes.attr('data-events',"scroll");},closeMeListener:function closeMeListener(e,pluginId){var plugin=e.namespace.split('.')[0];var plugins=jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin,"]")).not("[data-yeti-box=\"".concat(pluginId,"\"]"));plugins.each(function(){var _this=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);_this.triggerHandler('close.zf.trigger',[_this]);});}};// Global, parses whole document.
_Triggers.Initializers.addClosemeListener=function(pluginName){var yetiBoxes=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),plugNames=['dropdown','tooltip','reveal'];if(pluginName){if(typeof pluginName==='string'){plugNames.push(pluginName);}else if(_typeof(pluginName)==='object'&&typeof pluginName[0]==='string'){plugNames=plugNames.concat(pluginName);}else{console.error('Plugin names must be strings');}}if(yetiBoxes.length){var listeners=plugNames.map(function(name){return"closeme.zf.".concat(name);}).join(' ');jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners,_Triggers.Listeners.Global.closeMeListener);}};function debounceGlobalListener(debounce,trigger,listener){var timer,args=Array.prototype.slice.call(arguments,3);jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(trigger,function(){if(timer){clearTimeout(timer);}timer=setTimeout(function(){listener.apply(null,args);},debounce||10);//default time to emit scroll event
});}_Triggers.Initializers.addResizeListener=function(debounce){var $nodes=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');if($nodes.length){debounceGlobalListener(debounce,'resize.zf.trigger',_Triggers.Listeners.Global.resizeListener,$nodes);}};_Triggers.Initializers.addScrollListener=function(debounce){var $nodes=jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');if($nodes.length){debounceGlobalListener(debounce,'scroll.zf.trigger',_Triggers.Listeners.Global.scrollListener,$nodes);}};_Triggers.Initializers.addMutationEventsListener=function($elem){if(!MutationObserver){return false;}var $nodes=$elem.find('[data-resize], [data-scroll], [data-mutate]');//element callback
var listeningElementsMutation=function listeningElementsMutation(mutationRecordsList){var $target=jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target);//trigger the event handler for the element depending on type
switch(mutationRecordsList[0].type){case"attributes":if($target.attr("data-events")==="scroll"&&mutationRecordsList[0].attributeName==="data-events"){$target.triggerHandler('scrollme.zf.trigger',[$target,window.pageYOffset]);}if($target.attr("data-events")==="resize"&&mutationRecordsList[0].attributeName==="data-events"){$target.triggerHandler('resizeme.zf.trigger',[$target]);}if(mutationRecordsList[0].attributeName==="style"){$target.closest("[data-mutate]").attr("data-events","mutate");$target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger',[$target.closest("[data-mutate]")]);}break;case"childList":$target.closest("[data-mutate]").attr("data-events","mutate");$target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger',[$target.closest("[data-mutate]")]);break;default:return false;//nothing
}};if($nodes.length){//for each element that needs to listen for resizing, scrolling, or mutation add a single observer
for(var i=0;i<=$nodes.length-1;i++){var elementObserver=new MutationObserver(listeningElementsMutation);elementObserver.observe($nodes[i],{attributes:true,childList:true,characterData:false,subtree:true,attributeFilter:["data-events","style"]});}}};_Triggers.Initializers.addSimpleListeners=function(){var $document=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);_Triggers.Initializers.addOpenListener($document);_Triggers.Initializers.addCloseListener($document);_Triggers.Initializers.addToggleListener($document);_Triggers.Initializers.addCloseableListener($document);_Triggers.Initializers.addToggleFocusListener($document);};_Triggers.Initializers.addGlobalListeners=function(){var $document=jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);_Triggers.Initializers.addMutationEventsListener($document);_Triggers.Initializers.addResizeListener(250);_Triggers.Initializers.addScrollListener();_Triggers.Initializers.addClosemeListener();};_Triggers.init=function(__,Foundation){(0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window),function(){if(jquery__WEBPACK_IMPORTED_MODULE_0___default().triggersInitialized!==true){_Triggers.Initializers.addSimpleListeners();_Triggers.Initializers.addGlobalListeners();jquery__WEBPACK_IMPORTED_MODULE_0___default().triggersInitialized=true;}});if(Foundation){Foundation.Triggers=_Triggers;// Legacy included to be backwards compatible for now.
Foundation.IHearYou=_Triggers.Initializers.addGlobalListeners;}};/***/}),/***/"jquery":(/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************//***/function jquery(module){module.exports=__WEBPACK_EXTERNAL_MODULE_jquery__;/***/})/******/};/************************************************************************//******/// The module cache
/******/var __webpack_module_cache__={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=__webpack_module_cache__[moduleId]={/******/// no module.id needed
/******/// no module.loaded needed
/******/exports:{}/******/};/******//******/// Execute the module function
/******/__webpack_modules__[moduleId](module,module.exports,__webpack_require__);/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//************************************************************************//******//* webpack/runtime/compat get default export *//******/!function(){/******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function(){return module['default'];}:/******/function(){return module;};/******/__webpack_require__.d(getter,{a:getter});/******/return getter;/******/};/******/}();/******//******//* webpack/runtime/define property getters *//******/!function(){/******/// define getter functions for harmony exports
/******/__webpack_require__.d=function(exports,definition){/******/for(var key in definition){/******/if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){/******/Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});/******/}/******/}/******/};/******/}();/******//******//* webpack/runtime/hasOwnProperty shorthand *//******/!function(){/******/__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);};/******/}();/******//******//* webpack/runtime/make namespace object *//******/!function(){/******/// define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/}();/******//************************************************************************/var __webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function(){/*!**********************************!*\
  !*** ./js/entries/foundation.js ***!
  \**********************************/__webpack_require__.r(__webpack_exports__);/* harmony export */__webpack_require__.d(__webpack_exports__,{/* harmony export */Abide:function Abide(){return/* reexport safe */_foundation_abide__WEBPACK_IMPORTED_MODULE_12__.Abide;},/* harmony export */Accordion:function Accordion(){return/* reexport safe */_foundation_accordion__WEBPACK_IMPORTED_MODULE_13__.Accordion;},/* harmony export */AccordionMenu:function AccordionMenu(){return/* reexport safe */_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__.AccordionMenu;},/* harmony export */Box:function Box(){return/* reexport safe */_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__.Box;},/* harmony export */CoreUtils:function CoreUtils(){return/* reexport module object */_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__;},/* harmony export */Drilldown:function Drilldown(){return/* reexport safe */_foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__.Drilldown;},/* harmony export */Dropdown:function Dropdown(){return/* reexport safe */_foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown;},/* harmony export */DropdownMenu:function DropdownMenu(){return/* reexport safe */_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__.DropdownMenu;},/* harmony export */Equalizer:function Equalizer(){return/* reexport safe */_foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__.Equalizer;},/* harmony export */Foundation:function Foundation(){return/* reexport safe */_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation;},/* harmony export */Interchange:function Interchange(){return/* reexport safe */_foundation_interchange__WEBPACK_IMPORTED_MODULE_19__.Interchange;},/* harmony export */Keyboard:function Keyboard(){return/* reexport safe */_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__.Keyboard;},/* harmony export */Magellan:function Magellan(){return/* reexport safe */_foundation_magellan__WEBPACK_IMPORTED_MODULE_20__.Magellan;},/* harmony export */MediaQuery:function MediaQuery(){return/* reexport safe */_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__.MediaQuery;},/* harmony export */Motion:function Motion(){return/* reexport safe */_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__.Motion;},/* harmony export */Nest:function Nest(){return/* reexport safe */_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__.Nest;},/* harmony export */OffCanvas:function OffCanvas(){return/* reexport safe */_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__.OffCanvas;},/* harmony export */Orbit:function Orbit(){return/* reexport safe */_foundation_orbit__WEBPACK_IMPORTED_MODULE_22__.Orbit;},/* harmony export */ResponsiveAccordionTabs:function ResponsiveAccordionTabs(){return/* reexport safe */_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__.ResponsiveAccordionTabs;},/* harmony export */ResponsiveMenu:function ResponsiveMenu(){return/* reexport safe */_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__.ResponsiveMenu;},/* harmony export */ResponsiveToggle:function ResponsiveToggle(){return/* reexport safe */_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__.ResponsiveToggle;},/* harmony export */Reveal:function Reveal(){return/* reexport safe */_foundation_reveal__WEBPACK_IMPORTED_MODULE_25__.Reveal;},/* harmony export */Slider:function Slider(){return/* reexport safe */_foundation_slider__WEBPACK_IMPORTED_MODULE_26__.Slider;},/* harmony export */SmoothScroll:function SmoothScroll(){return/* reexport safe */_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__.SmoothScroll;},/* harmony export */Sticky:function Sticky(){return/* reexport safe */_foundation_sticky__WEBPACK_IMPORTED_MODULE_28__.Sticky;},/* harmony export */Tabs:function Tabs(){return/* reexport safe */_foundation_tabs__WEBPACK_IMPORTED_MODULE_29__.Tabs;},/* harmony export */Timer:function Timer(){return/* reexport safe */_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__.Timer;},/* harmony export */Toggler:function Toggler(){return/* reexport safe */_foundation_toggler__WEBPACK_IMPORTED_MODULE_30__.Toggler;},/* harmony export */Tooltip:function Tooltip(){return/* reexport safe */_foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__.Tooltip;},/* harmony export */Touch:function Touch(){return/* reexport safe */_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__.Touch;},/* harmony export */Triggers:function Triggers(){return/* reexport safe */_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__.Triggers;},/* harmony export */onImagesLoaded:function onImagesLoaded(){return/* reexport safe */_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__.onImagesLoaded;}/* harmony export */});/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! jquery */"jquery");/* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _foundation_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ../foundation.core */"./js/foundation.core.js");/* harmony import */var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ../foundation.core.utils */"./js/foundation.core.utils.js");/* harmony import */var _foundation_util_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ../foundation.util.box */"./js/foundation.util.box.js");/* harmony import */var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ../foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");/* harmony import */var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../foundation.util.keyboard */"./js/foundation.util.keyboard.js");/* harmony import */var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ../foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");/* harmony import */var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ../foundation.util.motion */"./js/foundation.util.motion.js");/* harmony import */var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ../foundation.util.nest */"./js/foundation.util.nest.js");/* harmony import */var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ../foundation.util.timer */"./js/foundation.util.timer.js");/* harmony import */var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ../foundation.util.touch */"./js/foundation.util.touch.js");/* harmony import */var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ../foundation.util.triggers */"./js/foundation.util.triggers.js");/* harmony import */var _foundation_abide__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! ../foundation.abide */"./js/foundation.abide.js");/* harmony import */var _foundation_accordion__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(/*! ../foundation.accordion */"./js/foundation.accordion.js");/* harmony import */var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(/*! ../foundation.accordionMenu */"./js/foundation.accordionMenu.js");/* harmony import */var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(/*! ../foundation.drilldown */"./js/foundation.drilldown.js");/* harmony import */var _foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(/*! ../foundation.dropdown */"./js/foundation.dropdown.js");/* harmony import */var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(/*! ../foundation.dropdownMenu */"./js/foundation.dropdownMenu.js");/* harmony import */var _foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(/*! ../foundation.equalizer */"./js/foundation.equalizer.js");/* harmony import */var _foundation_interchange__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(/*! ../foundation.interchange */"./js/foundation.interchange.js");/* harmony import */var _foundation_magellan__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(/*! ../foundation.magellan */"./js/foundation.magellan.js");/* harmony import */var _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(/*! ../foundation.offcanvas */"./js/foundation.offcanvas.js");/* harmony import */var _foundation_orbit__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(/*! ../foundation.orbit */"./js/foundation.orbit.js");/* harmony import */var _foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(/*! ../foundation.responsiveMenu */"./js/foundation.responsiveMenu.js");/* harmony import */var _foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(/*! ../foundation.responsiveToggle */"./js/foundation.responsiveToggle.js");/* harmony import */var _foundation_reveal__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(/*! ../foundation.reveal */"./js/foundation.reveal.js");/* harmony import */var _foundation_slider__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(/*! ../foundation.slider */"./js/foundation.slider.js");/* harmony import */var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(/*! ../foundation.smoothScroll */"./js/foundation.smoothScroll.js");/* harmony import */var _foundation_sticky__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__(/*! ../foundation.sticky */"./js/foundation.sticky.js");/* harmony import */var _foundation_tabs__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__(/*! ../foundation.tabs */"./js/foundation.tabs.js");/* harmony import */var _foundation_toggler__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__(/*! ../foundation.toggler */"./js/foundation.toggler.js");/* harmony import */var _foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__(/*! ../foundation.tooltip */"./js/foundation.tooltip.js");/* harmony import */var _foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__(/*! ../foundation.responsiveAccordionTabs */"./js/foundation.responsiveAccordionTabs.js");_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default());// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.rtl=_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.GetYoDigits=_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.transitionend=_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.RegExpEscape=_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.RegExpEscape;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.onLoad=_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.Box=_foundation_util_box__WEBPACK_IMPORTED_MODULE_3__.Box;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.onImagesLoaded=_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__.onImagesLoaded;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.Keyboard=_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_5__.Keyboard;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.MediaQuery=_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__.MediaQuery;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.Motion=_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__.Motion;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.Move=_foundation_util_motion__WEBPACK_IMPORTED_MODULE_7__.Move;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.Nest=_foundation_util_nest__WEBPACK_IMPORTED_MODULE_8__.Nest;_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.Timer=_foundation_util_timer__WEBPACK_IMPORTED_MODULE_9__.Timer;// Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.
_foundation_util_touch__WEBPACK_IMPORTED_MODULE_10__.Touch.init(jquery__WEBPACK_IMPORTED_MODULE_0___default());_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_11__.Triggers.init(jquery__WEBPACK_IMPORTED_MODULE_0___default(),_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation);_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_6__.MediaQuery._init();_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_abide__WEBPACK_IMPORTED_MODULE_12__.Abide,'Abide');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_accordion__WEBPACK_IMPORTED_MODULE_13__.Accordion,'Accordion');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_14__.AccordionMenu,'AccordionMenu');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_drilldown__WEBPACK_IMPORTED_MODULE_15__.Drilldown,'Drilldown');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown,'Dropdown');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_17__.DropdownMenu,'DropdownMenu');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_equalizer__WEBPACK_IMPORTED_MODULE_18__.Equalizer,'Equalizer');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_interchange__WEBPACK_IMPORTED_MODULE_19__.Interchange,'Interchange');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_magellan__WEBPACK_IMPORTED_MODULE_20__.Magellan,'Magellan');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_21__.OffCanvas,'OffCanvas');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_orbit__WEBPACK_IMPORTED_MODULE_22__.Orbit,'Orbit');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_23__.ResponsiveMenu,'ResponsiveMenu');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_24__.ResponsiveToggle,'ResponsiveToggle');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_reveal__WEBPACK_IMPORTED_MODULE_25__.Reveal,'Reveal');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_slider__WEBPACK_IMPORTED_MODULE_26__.Slider,'Slider');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_27__.SmoothScroll,'SmoothScroll');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_sticky__WEBPACK_IMPORTED_MODULE_28__.Sticky,'Sticky');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_tabs__WEBPACK_IMPORTED_MODULE_29__.Tabs,'Tabs');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_toggler__WEBPACK_IMPORTED_MODULE_30__.Toggler,'Toggler');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_tooltip__WEBPACK_IMPORTED_MODULE_31__.Tooltip,'Tooltip');_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_32__.ResponsiveAccordionTabs,'ResponsiveAccordionTabs');/* harmony default export */__webpack_exports__["default"]=_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation;}();/******/return __webpack_exports__;/******/}();});/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 *//* global window, document, define, jQuery, setInterval, clearInterval */;(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports!=='undefined'){module.exports=factory(require('jquery'));}else{factory(jQuery);}})(function($){'use strict';var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function customPaging(slider,i){return $('<button type="button" />').text(i+1);},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;// A simple way to check for HTML strings
// Strict HTML recognition (must start with <)
// Extracted from jQuery v1.11 source
_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}return Slick;}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==='boolean'){addBefore=index;index=null;}else if(index<0||index>=_.slideCount){return false;}_.unload();if(typeof index==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft;}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function step(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps);}},complete:function complete(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&_typeof2(asNavFor)==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;}if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0;}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}if(_.options.infinite!==true){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass('draggable');}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}slide.appendChild(row);}newSlides.appendChild(slide);}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':100/_.options.slidesPerRow+'%','display':'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth;}else if(_.respondTo==='slider'){respondToWidth=sliderWidth;}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth);}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}// only trigger breakpoints during an actual break. not on initialize.
if(!initial&&triggerBreakpoint!==false){_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;// If target is a link, prevent default action.
if($target.is('a')){event.preventDefault();}// If target is not the <li> element (ie: a child), find the <li>.
if(!$target.is('li')){$target=$target.closest('li');}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}prevNavigable=navigables[n];}}return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off('keydown.slick',_.keyHandler);}}_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off('keydown.slick',_.keyHandler);_.$nextArrow&&_.$nextArrow.off('keydown.slick',_.keyHandler);}}_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off('click.slick',_.selectHandler);}$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh){_.$slider.trigger('destroy',[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay();}},0);});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty;}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}else if(_.options.centerMode===true){pagerQty=_.slideCount;}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5;}else if(_.options.slidesToShow===1){coef=-2;}}verticalOffset=verticalHeight*_.options.slidesToShow*coef;}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1;}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight;}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2;}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset;}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset;}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+$(slide).outerWidth()/2>_.swipeLeft*-1){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}if(creation){_.$slider.trigger('init',[_]);}if(_.options.accessibility===true){_.initADA();}if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount;});_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({'role':'tabpanel','id':'slick-slide'+_.instanceUid+i,'tabindex':-1});if(slideControlIndex!==-1){var ariaButtonControl='slick-slide-control'+_.instanceUid+slideControlIndex;if($('#'+ariaButtonControl).length){$(this).attr({'aria-describedby':ariaButtonControl});}}});_.$dots.attr('role','tablist').find('li').each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({'role':'presentation'});$(this).find('button').first().attr({'role':'tab','id':'slick-slide-control'+_.instanceUid+i,'aria-controls':'slick-slide'+_.instanceUid+mappedSlideIndex,'aria-label':i+1+' of '+numDotGroups,'aria-selected':null,'tabindex':'-1'});}).eq(_.currentSlide).find('button').attr({'aria-selected':'true','tabindex':'0'}).end();}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({'tabindex':'0'});}else{_.$slides.eq(i).removeAttr('tabindex');}}_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on('keydown.slick',_.keyHandler);_.$nextArrow.on('keydown.slick',_.keyHandler);}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.accessibility===true){_.$dots.on('keydown.slick',_.keyHandler);}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;//Dont slide if the cursor is inside the form fields and arrow keys are pressed
if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}});}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}});}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');});_.$slider.trigger('lazyLoaded',[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);};imageToLoad.src=imageSource;});}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}}loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++;}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition();}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr('tabindex',0).focus();}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===true){_.setPosition();}_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){/**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger('allImagesLoaded',[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;// in non-infinite sliders, we don't want to go past the
// last visible index.
if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex;}// if less slides than to show, go to start.
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;// loop through the breakpoints and cut out any existing
// ones with the same breakpoint number, we don't want dupes.
while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}l--;}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:'0px '+_.options.centerPadding});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+' 0px'});}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children('.slick-slide').length));}else if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length));}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){/**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple';}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive';}else if(typeof arguments[1]!=='undefined'){type='single';}}if(type==='single'){_.options[option]=value;}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val;});}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;// loop through the responsive object and splice out duplicates.
while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}l--;}_.options.responsive.push(value[item]);}}}if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical');}else{_.$slider.removeClass('slick-vertical');}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;}if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';}_.transformsEnabled=_.options.useTransform&&_.animType!==null&&_.animType!==false;};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center');}}_.$slides.eq(index).addClass('slick-center');}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false');}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}}}if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');}_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return;}_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}if(_.options.fade===true&&_.currentSlide===index){return;}if(sync===false){_.asNavFor(index);}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}if(_.options.autoplay){clearInterval(_.autoPlayTimer);}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll;}else{animSlide=_.slideCount+targetSlide;}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}_.animateHeight();return;}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?'left':'right';}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?'left':'right';}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?'right':'left';}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return'down';}else{return'up';}}return'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false;}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false;}if(_.touchObject.edgeHit===true){_.$slider.trigger('edge',[_,_.swipeDirection()]);}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||'ontouchend'in document&&_.options.swipe===false){return;}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1){return;}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false;}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false;}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength;}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault();}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==='right'||_.currentSlide>=_.getDotCount()&&swipeDirection==='left'){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset;}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}if(_.options.fade===true||_.options.touchMove===false){return false;}if(_.animating===true){_.swipeLeft=null;return false;}_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').end();_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active');}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(_typeof2(opt)=='object'||typeof opt=='undefined')_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;}return _;};});/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 *//**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 *//* jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){// universal module definition
/*jshint strict: false *//* globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('jquery-bridget/jquery-bridget',['jquery'],function(jQuery){return factory(window,jQuery);});}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(window,require('jquery'));}else{// browser global
window.jQueryBridget=factory(window,window.jQuery);}})(window,function factory(window,jQuery){'use strict';// ----- utils ----- //
var arraySlice=Array.prototype.slice;// helper function for logging errors
// $.error breaks jQuery chaining
var console=window.console;var logError=typeof console=='undefined'?function(){}:function(message){console.error(message);};// ----- jQueryBridget ----- //
function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return;}// add option method -> $().plugin('option', {...})
if(!PluginClass.prototype.option){// option setter
PluginClass.prototype.option=function(opts){// bail out if not an object
if(!$.isPlainObject(opts)){return;}this.options=$.extend(true,this.options,opts);};}// make jQuery plugin
$.fn[namespace]=function(arg0/*, arg1 */){if(typeof arg0=='string'){// method call $().plugin( 'methodName', { options } )
// shift arguments by 1
var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args);}// just $().plugin({ options })
plainCall(this,arg0);return this;};// $().plugin('methodName')
function methodCall($elems,methodName,args){var returnValue;var pluginMethodStr='$().'+namespace+'("'+methodName+'")';$elems.each(function(i,elem){// get instance
var instance=$.data(elem,namespace);if(!instance){logError(namespace+' not initialized. Cannot call methods, i.e. '+pluginMethodStr);return;}var method=instance[methodName];if(!method||methodName.charAt(0)=='_'){logError(pluginMethodStr+' is not a valid method');return;}// apply method, get return value
var value=method.apply(instance,args);// set return value if value is returned, use only first value
returnValue=returnValue===undefined?value:returnValue;});return returnValue!==undefined?returnValue:$elems;}function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){// set options & init
instance.option(options);instance._init();}else{// initialize new instance
instance=new PluginClass(elem,options);$.data(elem,namespace,instance);}});}updateJQuery($);}// ----- updateJQuery ----- //
// set $.bridget for v1 backwards compatibility
function updateJQuery($){if(!$||$&&$.bridget){return;}$.bridget=jQueryBridget;}updateJQuery(jQuery||window.jQuery);// -----  ----- //
return jQueryBridget;});/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 *//* jshint unused: true, undef: true, strict: true */(function(global,factory){// universal module definition
/* jshint strict: false *//* globals define, module, window */if(typeof define=='function'&&define.amd){// AMD - RequireJS
define('ev-emitter/ev-emitter',factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory();}else{// Browser globals
global.EvEmitter=factory();}})(typeof window!='undefined'?window:void 0,function(){function EvEmitter(){}var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return;}// set events hash
var events=this._events=this._events||{};// set listeners array
var listeners=events[eventName]=events[eventName]||[];// only add once
if(listeners.indexOf(listener)==-1){listeners.push(listener);}return this;};proto.once=function(eventName,listener){if(!eventName||!listener){return;}// add event
this.on(eventName,listener);// set once flag
// set onceEvents hash
var onceEvents=this._onceEvents=this._onceEvents||{};// set onceListeners object
var onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};// set flag
onceListeners[listener]=true;return this;};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}var index=listeners.indexOf(listener);if(index!=-1){listeners.splice(index,1);}return this;};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}// copy over to avoid interference if .off() in listener
listeners=listeners.slice(0);args=args||[];// once stuff
var onceListeners=this._onceEvents&&this._onceEvents[eventName];for(var i=0;i<listeners.length;i++){var listener=listeners[i];var isOnce=onceListeners&&onceListeners[listener];if(isOnce){// remove listener
// remove before trigger to prevent recursion
this.off(eventName,listener);// unset once flag
delete onceListeners[listener];}// trigger listener
listener.apply(this,args);}return this;};proto.allOff=function(){delete this._events;delete this._onceEvents;};return EvEmitter;});/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 *//* jshint browser: true, strict: true, undef: true, unused: true *//* globals console: false */(function(window,factory){/* jshint strict: false *//* globals define, module */if(typeof define=='function'&&define.amd){// AMD
define('get-size/get-size',factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory();}else{// browser global
window.getSize=factory();}})(window,function factory(){'use strict';// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function getStyleSize(value){var num=parseFloat(value);// not a percent like '100%', and a number
var isValid=value.indexOf('%')==-1&&!isNaN(num);return isValid&&num;}function noop(){}var logError=typeof console=='undefined'?noop:function(message){console.error(message);};// -------------------------- measurements -------------------------- //
var measurements=['paddingLeft','paddingRight','paddingTop','paddingBottom','marginLeft','marginRight','marginTop','marginBottom','borderLeftWidth','borderRightWidth','borderTopWidth','borderBottomWidth'];var measurementsLength=measurements.length;function getZeroSize(){var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];size[measurement]=0;}return size;}// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError('Style returned '+style+'. Are you running this code in a hidden iframe on Firefox? '+'See https://bit.ly/getsizebug1');}return style;}// -------------------------- setup -------------------------- //
var isSetup=false;var isBoxSizeOuter;/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */function setup(){// setup once
if(isSetup){return;}isSetup=true;// -------------------------- box sizing -------------------------- //
/**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */var div=document.createElement('div');div.style.width='200px';div.style.padding='1px 2px 3px 4px';div.style.borderStyle='solid';div.style.borderWidth='1px 2px 3px 4px';div.style.boxSizing='border-box';var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);// round value for browser zoom. desandro/masonry#928
isBoxSizeOuter=Math.round(getStyleSize(style.width))==200;getSize.isBoxSizeOuter=isBoxSizeOuter;body.removeChild(div);}// -------------------------- getSize -------------------------- //
function getSize(elem){setup();// use querySeletor if elem is string
if(typeof elem=='string'){elem=document.querySelector(elem);}// do not proceed on non-objects
if(!elem||_typeof2(elem)!='object'||!elem.nodeType){return;}var style=getStyle(elem);// if hidden, everything is 0
if(style.display=='none'){return getZeroSize();}var size={};size.width=elem.offsetWidth;size.height=elem.offsetHeight;var isBorderBox=size.isBorderBox=style.boxSizing=='border-box';// get all measurements
for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];var value=style[measurement];var num=parseFloat(value);// any 'auto', 'medium' value will be 0
size[measurement]=!isNaN(num)?num:0;}var paddingWidth=size.paddingLeft+size.paddingRight;var paddingHeight=size.paddingTop+size.paddingBottom;var marginWidth=size.marginLeft+size.marginRight;var marginHeight=size.marginTop+size.marginBottom;var borderWidth=size.borderLeftWidth+size.borderRightWidth;var borderHeight=size.borderTopWidth+size.borderBottomWidth;var isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter;// overwrite width and height if we can get it from style
var styleWidth=getStyleSize(style.width);if(styleWidth!==false){size.width=styleWidth+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingWidth+borderWidth);}var styleHeight=getStyleSize(style.height);if(styleHeight!==false){size.height=styleHeight+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingHeight+borderHeight);}size.innerWidth=size.width-(paddingWidth+borderWidth);size.innerHeight=size.height-(paddingHeight+borderHeight);size.outerWidth=size.width+marginWidth;size.outerHeight=size.height+marginHeight;return size;}return getSize;});/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 *//*jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){/*global define: false, module: false */'use strict';// universal module definition
if(typeof define=='function'&&define.amd){// AMD
define('desandro-matches-selector/matches-selector',factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory();}else{// browser global
window.matchesSelector=factory();}})(window,function factory(){'use strict';var matchesMethod=function(){var ElemProto=window.Element.prototype;// check for the standard method name first
if(ElemProto.matches){return'matches';}// check un-prefixed
if(ElemProto.matchesSelector){return'matchesSelector';}// check vendor prefixes
var prefixes=['webkit','moz','ms','o'];for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var method=prefix+'MatchesSelector';if(ElemProto[method]){return method;}}}();return function matchesSelector(elem,selector){return elem[matchesMethod](selector);};});/**
 * Fizzy UI utils v2.0.7
 * MIT license
 *//*jshint browser: true, undef: true, unused: true, strict: true */(function(window,factory){// universal module definition
/*jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('fizzy-ui-utils/utils',['desandro-matches-selector/matches-selector'],function(matchesSelector){return factory(window,matchesSelector);});}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(window,require('desandro-matches-selector'));}else{// browser global
window.fizzyUIUtils=factory(window,window.matchesSelector);}})(window,function factory(window,matchesSelector){var utils={};// ----- extend ----- //
// extends objects
utils.extend=function(a,b){for(var prop in b){a[prop]=b[prop];}return a;};// ----- modulo ----- //
utils.modulo=function(num,div){return(num%div+div)%div;};// ----- makeArray ----- //
var arraySlice=Array.prototype.slice;// turn element or nodeList into an array
utils.makeArray=function(obj){if(Array.isArray(obj)){// use object if already an array
return obj;}// return empty array if undefined or null. #6
if(obj===null||obj===undefined){return[];}var isArrayLike=_typeof2(obj)=='object'&&typeof obj.length=='number';if(isArrayLike){// convert nodeList to array
return arraySlice.call(obj);}// array of single index
return[obj];};// ----- removeFrom ----- //
utils.removeFrom=function(ary,obj){var index=ary.indexOf(obj);if(index!=-1){ary.splice(index,1);}};// ----- getParent ----- //
utils.getParent=function(elem,selector){while(elem.parentNode&&elem!=document.body){elem=elem.parentNode;if(matchesSelector(elem,selector)){return elem;}}};// ----- getQueryElement ----- //
// use element as selector string
utils.getQueryElement=function(elem){if(typeof elem=='string'){return document.querySelector(elem);}return elem;};// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};// ----- filterFindElements ----- //
utils.filterFindElements=function(elems,selector){// make array of elems
elems=utils.makeArray(elems);var ffElems=[];elems.forEach(function(elem){// check that elem is an actual element
if(!(elem instanceof HTMLElement)){return;}// add elem if no selector
if(!selector){ffElems.push(elem);return;}// filter & find items if we have a selector
// filter
if(matchesSelector(elem,selector)){ffElems.push(elem);}// find children
var childElems=elem.querySelectorAll(selector);// concat childElems to filterFound array
for(var i=0;i<childElems.length;i++){ffElems.push(childElems[i]);}});return ffElems;};// ----- debounceMethod ----- //
utils.debounceMethod=function(_class,methodName,threshold){threshold=threshold||100;// original method
var method=_class.prototype[methodName];var timeoutName=methodName+'Timeout';_class.prototype[methodName]=function(){var timeout=this[timeoutName];clearTimeout(timeout);var args=arguments;var _this=this;this[timeoutName]=setTimeout(function(){method.apply(_this,args);delete _this[timeoutName];},threshold);};};// ----- docReady ----- //
utils.docReady=function(callback){var readyState=document.readyState;if(readyState=='complete'||readyState=='interactive'){// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(callback);}else{document.addEventListener('DOMContentLoaded',callback);}};// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed=function(str){return str.replace(/(.)([A-Z])/g,function(match,$1,$2){return $1+'-'+$2;}).toLowerCase();};var console=window.console;/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */utils.htmlInit=function(WidgetClass,namespace){utils.docReady(function(){var dashedNamespace=utils.toDashed(namespace);var dataAttr='data-'+dashedNamespace;var dataAttrElems=document.querySelectorAll('['+dataAttr+']');var jsDashElems=document.querySelectorAll('.js-'+dashedNamespace);var elems=utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));var dataOptionsAttr=dataAttr+'-options';var jQuery=window.jQuery;elems.forEach(function(elem){var attr=elem.getAttribute(dataAttr)||elem.getAttribute(dataOptionsAttr);var options;try{options=attr&&JSON.parse(attr);}catch(error){// log error, do not initialize
if(console){console.error('Error parsing '+dataAttr+' on '+elem.className+': '+error);}return;}// initialize
var instance=new WidgetClass(elem,options);// make available via $().data('namespace')
if(jQuery){jQuery.data(elem,namespace,instance);}});});};// -----  ----- //
return utils;});/**
 * Outlayer Item
 */(function(window,factory){// universal module definition
/* jshint strict: false *//* globals define, module, require */if(typeof define=='function'&&define.amd){// AMD - RequireJS
define('outlayer/item',['ev-emitter/ev-emitter','get-size/get-size'],factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory(require('ev-emitter'),require('get-size'));}else{// browser global
window.Outlayer={};window.Outlayer.Item=factory(window.EvEmitter,window.getSize);}})(window,function factory(EvEmitter,getSize){'use strict';// ----- helpers ----- //
function isEmptyObj(obj){for(var prop in obj){return false;}prop=null;return true;}// -------------------------- CSS3 support -------------------------- //
var docElemStyle=document.documentElement.style;var transitionProperty=typeof docElemStyle.transition=='string'?'transition':'WebkitTransition';var transformProperty=typeof docElemStyle.transform=='string'?'transform':'WebkitTransform';var transitionEndEvent={WebkitTransition:'webkitTransitionEnd',transition:'transitionend'}[transitionProperty];// cache all vendor properties that could have vendor prefix
var vendorProperties={transform:transformProperty,transition:transitionProperty,transitionDuration:transitionProperty+'Duration',transitionProperty:transitionProperty+'Property',transitionDelay:transitionProperty+'Delay'};// -------------------------- Item -------------------------- //
function Item(element,layout){if(!element){return;}this.element=element;// parent layout class, i.e. Masonry, Isotope, or Packery
this.layout=layout;this.position={x:0,y:0};this._create();}// inherit EvEmitter
var proto=Item.prototype=Object.create(EvEmitter.prototype);proto.constructor=Item;proto._create=function(){// transition objects
this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:'absolute'});};// trigger specified handler for event type
proto.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};proto.getSize=function(){this.size=getSize(this.element);};/**
 * apply CSS styles to element
 * @param {Object} style
 */proto.css=function(style){var elemStyle=this.element.style;for(var prop in style){// use vendor property if available
var supportedProp=vendorProperties[prop]||prop;elemStyle[supportedProp]=style[prop];}};// measure position, and sets it
proto.getPosition=function(){var style=getComputedStyle(this.element);var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');var xValue=style[isOriginLeft?'left':'right'];var yValue=style[isOriginTop?'top':'bottom'];var x=parseFloat(xValue);var y=parseFloat(yValue);// convert percent to pixels
var layoutSize=this.layout.size;if(xValue.indexOf('%')!=-1){x=x/100*layoutSize.width;}if(yValue.indexOf('%')!=-1){y=y/100*layoutSize.height;}// clean up 'auto' or other non-integer values
x=isNaN(x)?0:x;y=isNaN(y)?0:y;// remove padding from measurement
x-=isOriginLeft?layoutSize.paddingLeft:layoutSize.paddingRight;y-=isOriginTop?layoutSize.paddingTop:layoutSize.paddingBottom;this.position.x=x;this.position.y=y;};// set settled position, apply padding
proto.layoutPosition=function(){var layoutSize=this.layout.size;var style={};var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');// x
var xPadding=isOriginLeft?'paddingLeft':'paddingRight';var xProperty=isOriginLeft?'left':'right';var xResetProperty=isOriginLeft?'right':'left';var x=this.position.x+layoutSize[xPadding];// set in percentage or pixels
style[xProperty]=this.getXValue(x);// reset other property
style[xResetProperty]='';// y
var yPadding=isOriginTop?'paddingTop':'paddingBottom';var yProperty=isOriginTop?'top':'bottom';var yResetProperty=isOriginTop?'bottom':'top';var y=this.position.y+layoutSize[yPadding];// set in percentage or pixels
style[yProperty]=this.getYValue(y);// reset other property
style[yResetProperty]='';this.css(style);this.emitEvent('layout',[this]);};proto.getXValue=function(x){var isHorizontal=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&!isHorizontal?x/this.layout.size.width*100+'%':x+'px';};proto.getYValue=function(y){var isHorizontal=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&isHorizontal?y/this.layout.size.height*100+'%':y+'px';};proto._transitionTo=function(x,y){this.getPosition();// get current x & y from top/left
var curX=this.position.x;var curY=this.position.y;var didNotMove=x==this.position.x&&y==this.position.y;// save end position
this.setPosition(x,y);// if did not move and not transitioning, just go to layout
if(didNotMove&&!this.isTransitioning){this.layoutPosition();return;}var transX=x-curX;var transY=y-curY;var transitionStyle={};transitionStyle.transform=this.getTranslate(transX,transY);this.transition({to:transitionStyle,onTransitionEnd:{transform:this.layoutPosition},isCleaning:true});};proto.getTranslate=function(x,y){// flip cooridinates if origin on right or bottom
var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');x=isOriginLeft?x:-x;y=isOriginTop?y:-y;return'translate3d('+x+'px, '+y+'px, 0)';};// non transition + transform support
proto.goTo=function(x,y){this.setPosition(x,y);this.layoutPosition();};proto.moveTo=proto._transitionTo;proto.setPosition=function(x,y){this.position.x=parseFloat(x);this.position.y=parseFloat(y);};// ----- transition ----- //
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */// non transition, just trigger callback
proto._nonTransition=function(args){this.css(args.to);if(args.isCleaning){this._removeStyles(args.to);}for(var prop in args.onTransitionEnd){args.onTransitionEnd[prop].call(this);}};/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */proto.transition=function(args){// redirect to nonTransition if no transition duration
if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(args);return;}var _transition=this._transn;// keep track of onTransitionEnd callback by css property
for(var prop in args.onTransitionEnd){_transition.onEnd[prop]=args.onTransitionEnd[prop];}// keep track of properties that are transitioning
for(prop in args.to){_transition.ingProperties[prop]=true;// keep track of properties to clean up when transition is done
if(args.isCleaning){_transition.clean[prop]=true;}}// set from styles
if(args.from){this.css(args.from);// force redraw. http://blog.alexmaccaw.com/css-transitions
var h=this.element.offsetHeight;// hack for JSHint to hush about unused var
h=null;}// enable transition
this.enableTransition(args.to);// set styles that are transitioning
this.css(args.to);this.isTransitioning=true;};// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll(str){return str.replace(/([A-Z])/g,function($1){return'-'+$1.toLowerCase();});}var transitionProps='opacity,'+toDashedAll(transformProperty);proto.enableTransition=function/* style */(){// HACK changing transitionProperty during a transition
// will cause transition to jump
if(this.isTransitioning){return;}// make `transition: foo, bar, baz` from style object
// HACK un-comment this when enableTransition can work
// while a transition is happening
// var transitionValues = [];
// for ( var prop in style ) {
//   // dash-ify camelCased properties like WebkitTransition
//   prop = vendorProperties[ prop ] || prop;
//   transitionValues.push( toDashedAll( prop ) );
// }
// munge number to millisecond, to match stagger
var duration=this.layout.options.transitionDuration;duration=typeof duration=='number'?duration+'ms':duration;// enable transition styles
this.css({transitionProperty:transitionProps,transitionDuration:duration,transitionDelay:this.staggerDelay||0});// listen for transition end event
this.element.addEventListener(transitionEndEvent,this,false);};// ----- events ----- //
proto.onwebkitTransitionEnd=function(event){this.ontransitionend(event);};proto.onotransitionend=function(event){this.ontransitionend(event);};// properties that I munge to make my life easier
var dashedVendorProperties={'-webkit-transform':'transform'};proto.ontransitionend=function(event){// disregard bubbled events from children
if(event.target!==this.element){return;}var _transition=this._transn;// get property name of transitioned property, convert to prefix-free
var propertyName=dashedVendorProperties[event.propertyName]||event.propertyName;// remove property that has completed transitioning
delete _transition.ingProperties[propertyName];// check if any properties are still transitioning
if(isEmptyObj(_transition.ingProperties)){// all properties have completed transitioning
this.disableTransition();}// clean style
if(propertyName in _transition.clean){// clean up style
this.element.style[event.propertyName]='';delete _transition.clean[propertyName];}// trigger onTransitionEnd callback
if(propertyName in _transition.onEnd){var onTransitionEnd=_transition.onEnd[propertyName];onTransitionEnd.call(this);delete _transition.onEnd[propertyName];}this.emitEvent('transitionEnd',[this]);};proto.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(transitionEndEvent,this,false);this.isTransitioning=false;};/**
 * removes style property from element
 * @param {Object} style
**/proto._removeStyles=function(style){// clean up transition styles
var cleanStyle={};for(var prop in style){cleanStyle[prop]='';}this.css(cleanStyle);};var cleanTransitionStyle={transitionProperty:'',transitionDuration:'',transitionDelay:''};proto.removeTransitionStyles=function(){// remove transition
this.css(cleanTransitionStyle);};// ----- stagger ----- //
proto.stagger=function(delay){delay=isNaN(delay)?0:delay;this.staggerDelay=delay+'ms';};// ----- show/hide/remove ----- //
// remove element from DOM
proto.removeElem=function(){this.element.parentNode.removeChild(this.element);// remove display: none
this.css({display:''});this.emitEvent('remove',[this]);};proto.remove=function(){// just remove element if no transition support or no transition
if(!transitionProperty||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return;}// start transition
this.once('transitionEnd',function(){this.removeElem();});this.hide();};proto.reveal=function(){delete this.isHidden;// remove display: none
this.css({display:''});var options=this.layout.options;var onTransitionEnd={};var transitionEndProperty=this.getHideRevealTransitionEndProperty('visibleStyle');onTransitionEnd[transitionEndProperty]=this.onRevealTransitionEnd;this.transition({from:options.hiddenStyle,to:options.visibleStyle,isCleaning:true,onTransitionEnd:onTransitionEnd});};proto.onRevealTransitionEnd=function(){// check if still visible
// during transition, item may have been hidden
if(!this.isHidden){this.emitEvent('reveal');}};/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */proto.getHideRevealTransitionEndProperty=function(styleProperty){var optionStyle=this.layout.options[styleProperty];// use opacity
if(optionStyle.opacity){return'opacity';}// get first property
for(var prop in optionStyle){return prop;}};proto.hide=function(){// set flag
this.isHidden=true;// remove display: none
this.css({display:''});var options=this.layout.options;var onTransitionEnd={};var transitionEndProperty=this.getHideRevealTransitionEndProperty('hiddenStyle');onTransitionEnd[transitionEndProperty]=this.onHideTransitionEnd;this.transition({from:options.visibleStyle,to:options.hiddenStyle,// keep hidden stuff hidden
isCleaning:true,onTransitionEnd:onTransitionEnd});};proto.onHideTransitionEnd=function(){// check if still hidden
// during transition, item may have been un-hidden
if(this.isHidden){this.css({display:'none'});this.emitEvent('hide');}};proto.destroy=function(){this.css({position:'',left:'',right:'',top:'',bottom:'',transition:'',transform:''});};return Item;});/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */(function(window,factory){'use strict';// universal module definition
/* jshint strict: false *//* globals define, module, require */if(typeof define=='function'&&define.amd){// AMD - RequireJS
define('outlayer/outlayer',['ev-emitter/ev-emitter','get-size/get-size','fizzy-ui-utils/utils','./item'],function(EvEmitter,getSize,utils,Item){return factory(window,EvEmitter,getSize,utils,Item);});}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory(window,require('ev-emitter'),require('get-size'),require('fizzy-ui-utils'),require('./item'));}else{// browser global
window.Outlayer=factory(window,window.EvEmitter,window.getSize,window.fizzyUIUtils,window.Outlayer.Item);}})(window,function factory(window,EvEmitter,getSize,utils,Item){'use strict';// ----- vars ----- //
var console=window.console;var jQuery=window.jQuery;var noop=function noop(){};// -------------------------- Outlayer -------------------------- //
// globally unique identifiers
var GUID=0;// internal store of all Outlayer intances
var instances={};/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */function Outlayer(element,options){var queryElement=utils.getQueryElement(element);if(!queryElement){if(console){console.error('Bad element for '+this.constructor.namespace+': '+(queryElement||element));}return;}this.element=queryElement;// add jQuery
if(jQuery){this.$element=jQuery(this.element);}// options
this.options=utils.extend({},this.constructor.defaults);this.option(options);// add id for Outlayer.getFromElement
var id=++GUID;this.element.outlayerGUID=id;// expando
instances[id]=this;// associate via id
// kick it off
this._create();var isInitLayout=this._getOption('initLayout');if(isInitLayout){this.layout();}}// settings are for internal use only
Outlayer.namespace='outlayer';Outlayer.Item=Item;// default options
Outlayer.defaults={containerStyle:{position:'relative'},initLayout:true,originLeft:true,originTop:true,resize:true,resizeContainer:true,// item options
transitionDuration:'0.4s',hiddenStyle:{opacity:0,transform:'scale(0.001)'},visibleStyle:{opacity:1,transform:'scale(1)'}};var proto=Outlayer.prototype;// inherit EvEmitter
utils.extend(proto,EvEmitter.prototype);/**
 * set options
 * @param {Object} opts
 */proto.option=function(opts){utils.extend(this.options,opts);};/**
 * get backwards compatible option value, check old name
 */proto._getOption=function(option){var oldOption=this.constructor.compatOptions[option];return oldOption&&this.options[oldOption]!==undefined?this.options[oldOption]:this.options[option];};Outlayer.compatOptions={// currentName: oldName
initLayout:'isInitLayout',horizontal:'isHorizontal',layoutInstant:'isLayoutInstant',originLeft:'isOriginLeft',originTop:'isOriginTop',resize:'isResizeBound',resizeContainer:'isResizingContainer'};proto._create=function(){// get items from children
this.reloadItems();// elements that affect layout, but are not laid out
this.stamps=[];this.stamp(this.options.stamp);// set container style
utils.extend(this.element.style,this.options.containerStyle);// bind resize method
var canBindResize=this._getOption('resize');if(canBindResize){this.bindResize();}};// goes through all children again and gets bricks in proper order
proto.reloadItems=function(){// collection of item elements
this.items=this._itemize(this.element.children);};/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */proto._itemize=function(elems){var itemElems=this._filterFindItemElements(elems);var Item=this.constructor.Item;// create new Outlayer Items for collection
var items=[];for(var i=0;i<itemElems.length;i++){var elem=itemElems[i];var item=new Item(elem,this);items.push(item);}return items;};/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */proto._filterFindItemElements=function(elems){return utils.filterFindElements(elems,this.options.itemSelector);};/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */proto.getItemElements=function(){return this.items.map(function(item){return item.element;});};// ----- init & layout ----- //
/**
 * lays out all items
 */proto.layout=function(){this._resetLayout();this._manageStamps();// don't animate first layout
var layoutInstant=this._getOption('layoutInstant');var isInstant=layoutInstant!==undefined?layoutInstant:!this._isLayoutInited;this.layoutItems(this.items,isInstant);// flag for initalized
this._isLayoutInited=true;};// _init is alias for layout
proto._init=proto.layout;/**
 * logic before any new layout
 */proto._resetLayout=function(){this.getSize();};proto.getSize=function(){this.size=getSize(this.element);};/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */proto._getMeasurement=function(measurement,size){var option=this.options[measurement];var elem;if(!option){// default to 0
this[measurement]=0;}else{// use option as an element
if(typeof option=='string'){elem=this.element.querySelector(option);}else if(option instanceof HTMLElement){elem=option;}// use size of element, if element
this[measurement]=elem?getSize(elem)[size]:option;}};/**
 * layout a collection of item elements
 * @api public
 */proto.layoutItems=function(items,isInstant){items=this._getItemsForLayout(items);this._layoutItems(items,isInstant);this._postLayout();};/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */proto._getItemsForLayout=function(items){return items.filter(function(item){return!item.isIgnored;});};/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */proto._layoutItems=function(items,isInstant){this._emitCompleteOnItems('layout',items);if(!items||!items.length){// no items, emit event with empty array
return;}var queue=[];items.forEach(function(item){// get x/y object from method
var position=this._getItemLayoutPosition(item);// enqueue
position.item=item;position.isInstant=isInstant||item.isLayoutInstant;queue.push(position);},this);this._processLayoutQueue(queue);};/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */proto._getItemLayoutPosition=function/* item */(){return{x:0,y:0};};/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */proto._processLayoutQueue=function(queue){this.updateStagger();queue.forEach(function(obj,i){this._positionItem(obj.item,obj.x,obj.y,obj.isInstant,i);},this);};// set stagger from option in milliseconds number
proto.updateStagger=function(){var stagger=this.options.stagger;if(stagger===null||stagger===undefined){this.stagger=0;return;}this.stagger=getMilliseconds(stagger);return this.stagger;};/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */proto._positionItem=function(item,x,y,isInstant,i){if(isInstant){// if not transition, just set CSS
item.goTo(x,y);}else{item.stagger(i*this.stagger);item.moveTo(x,y);}};/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */proto._postLayout=function(){this.resizeContainer();};proto.resizeContainer=function(){var isResizingContainer=this._getOption('resizeContainer');if(!isResizingContainer){return;}var size=this._getContainerSize();if(size){this._setContainerMeasure(size.width,true);this._setContainerMeasure(size.height,false);}};/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */proto._getContainerSize=noop;/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */proto._setContainerMeasure=function(measure,isWidth){if(measure===undefined){return;}var elemSize=this.size;// add padding and border width if border box
if(elemSize.isBorderBox){measure+=isWidth?elemSize.paddingLeft+elemSize.paddingRight+elemSize.borderLeftWidth+elemSize.borderRightWidth:elemSize.paddingBottom+elemSize.paddingTop+elemSize.borderTopWidth+elemSize.borderBottomWidth;}measure=Math.max(measure,0);this.element.style[isWidth?'width':'height']=measure+'px';};/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */proto._emitCompleteOnItems=function(eventName,items){var _this=this;function onComplete(){_this.dispatchEvent(eventName+'Complete',null,[items]);}var count=items.length;if(!items||!count){onComplete();return;}var doneCount=0;function tick(){doneCount++;if(doneCount==count){onComplete();}}// bind callback
items.forEach(function(item){item.once(eventName,tick);});};/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */proto.dispatchEvent=function(type,event,args){// add original event to arguments
var emitArgs=event?[event].concat(args):args;this.emitEvent(type,emitArgs);if(jQuery){// set this.$element
this.$element=this.$element||jQuery(this.element);if(event){// create jQuery event
var $event=jQuery.Event(event);$event.type=type;this.$element.trigger($event,args);}else{// just trigger with type if no event available
this.$element.trigger(type,args);}}};// -------------------------- ignore & stamps -------------------------- //
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */proto.ignore=function(elem){var item=this.getItem(elem);if(item){item.isIgnored=true;}};/**
 * return item to layout collection
 * @param {Element} elem
 */proto.unignore=function(elem){var item=this.getItem(elem);if(item){delete item.isIgnored;}};/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */proto.stamp=function(elems){elems=this._find(elems);if(!elems){return;}this.stamps=this.stamps.concat(elems);// ignore
elems.forEach(this.ignore,this);};/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */proto.unstamp=function(elems){elems=this._find(elems);if(!elems){return;}elems.forEach(function(elem){// filter out removed stamp elements
utils.removeFrom(this.stamps,elem);this.unignore(elem);},this);};/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */proto._find=function(elems){if(!elems){return;}// if string, use argument as selector string
if(typeof elems=='string'){elems=this.element.querySelectorAll(elems);}elems=utils.makeArray(elems);return elems;};proto._manageStamps=function(){if(!this.stamps||!this.stamps.length){return;}this._getBoundingRect();this.stamps.forEach(this._manageStamp,this);};// update boundingLeft / Top
proto._getBoundingRect=function(){// get bounding rect for container element
var boundingRect=this.element.getBoundingClientRect();var size=this.size;this._boundingRect={left:boundingRect.left+size.paddingLeft+size.borderLeftWidth,top:boundingRect.top+size.paddingTop+size.borderTopWidth,right:boundingRect.right-(size.paddingRight+size.borderRightWidth),bottom:boundingRect.bottom-(size.paddingBottom+size.borderBottomWidth)};};/**
 * @param {Element} stamp
**/proto._manageStamp=noop;/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */proto._getElementOffset=function(elem){var boundingRect=elem.getBoundingClientRect();var thisRect=this._boundingRect;var size=getSize(elem);var offset={left:boundingRect.left-thisRect.left-size.marginLeft,top:boundingRect.top-thisRect.top-size.marginTop,right:thisRect.right-boundingRect.right-size.marginRight,bottom:thisRect.bottom-boundingRect.bottom-size.marginBottom};return offset;};// -------------------------- resize -------------------------- //
// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent=utils.handleEvent;/**
 * Bind layout to window resizing
 */proto.bindResize=function(){window.addEventListener('resize',this);this.isResizeBound=true;};/**
 * Unbind layout to window resizing
 */proto.unbindResize=function(){window.removeEventListener('resize',this);this.isResizeBound=false;};proto.onresize=function(){this.resize();};utils.debounceMethod(Outlayer,'onresize',100);proto.resize=function(){// don't trigger if size did not change
// or if resize was unbound. See #9
if(!this.isResizeBound||!this.needsResizeLayout()){return;}this.layout();};/**
 * check if layout is needed post layout
 * @returns Boolean
 */proto.needsResizeLayout=function(){var size=getSize(this.element);// check that this.size and size are there
// IE8 triggers resize on body size change, so they might not be
var hasSizes=this.size&&size;return hasSizes&&size.innerWidth!==this.size.innerWidth;};// -------------------------- methods -------------------------- //
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/proto.addItems=function(elems){var items=this._itemize(elems);// add items to collection
if(items.length){this.items=this.items.concat(items);}return items;};/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */proto.appended=function(elems){var items=this.addItems(elems);if(!items.length){return;}// layout and reveal just the new items
this.layoutItems(items,true);this.reveal(items);};/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */proto.prepended=function(elems){var items=this._itemize(elems);if(!items.length){return;}// add items to beginning of collection
var previousItems=this.items.slice(0);this.items=items.concat(previousItems);// start new layout
this._resetLayout();this._manageStamps();// layout new stuff without transition
this.layoutItems(items,true);this.reveal(items);// layout previous items
this.layoutItems(previousItems);};/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */proto.reveal=function(items){this._emitCompleteOnItems('reveal',items);if(!items||!items.length){return;}var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.reveal();});};/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */proto.hide=function(items){this._emitCompleteOnItems('hide',items);if(!items||!items.length){return;}var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.hide();});};/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */proto.revealItemElements=function(elems){var items=this.getItems(elems);this.reveal(items);};/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */proto.hideItemElements=function(elems){var items=this.getItems(elems);this.hide(items);};/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */proto.getItem=function(elem){// loop through items to get the one that matches
for(var i=0;i<this.items.length;i++){var item=this.items[i];if(item.element==elem){// return item
return item;}}};/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */proto.getItems=function(elems){elems=utils.makeArray(elems);var items=[];elems.forEach(function(elem){var item=this.getItem(elem);if(item){items.push(item);}},this);return items;};/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */proto.remove=function(elems){var removeItems=this.getItems(elems);this._emitCompleteOnItems('remove',removeItems);// bail if no items to remove
if(!removeItems||!removeItems.length){return;}removeItems.forEach(function(item){item.remove();// remove item from collection
utils.removeFrom(this.items,item);},this);};// ----- destroy ----- //
// remove and disable Outlayer instance
proto.destroy=function(){// clean up dynamic styles
var style=this.element.style;style.height='';style.position='';style.width='';// destroy items
this.items.forEach(function(item){item.destroy();});this.unbindResize();var id=this.element.outlayerGUID;delete instances[id];// remove reference to instance by id
delete this.element.outlayerGUID;// remove data for jQuery
if(jQuery){jQuery.removeData(this.element,this.constructor.namespace);}};// -------------------------- data -------------------------- //
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */Outlayer.data=function(elem){elem=utils.getQueryElement(elem);var id=elem&&elem.outlayerGUID;return id&&instances[id];};// -------------------------- create Outlayer class -------------------------- //
/**
 * create a layout class
 * @param {String} namespace
 */Outlayer.create=function(namespace,options){// sub-class Outlayer
var Layout=subclass(Outlayer);// apply new options and compatOptions
Layout.defaults=utils.extend({},Outlayer.defaults);utils.extend(Layout.defaults,options);Layout.compatOptions=utils.extend({},Outlayer.compatOptions);Layout.namespace=namespace;Layout.data=Outlayer.data;// sub-class Item
Layout.Item=subclass(Item);// -------------------------- declarative -------------------------- //
utils.htmlInit(Layout,namespace);// -------------------------- jQuery bridge -------------------------- //
// make into jQuery plugin
if(jQuery&&jQuery.bridget){jQuery.bridget(namespace,Layout);}return Layout;};function subclass(Parent){function SubClass(){Parent.apply(this,arguments);}SubClass.prototype=Object.create(Parent.prototype);SubClass.prototype.constructor=SubClass;return SubClass;}// ----- helpers ----- //
// how many milliseconds are in each unit
var msUnits={ms:1,s:1000};// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds(time){if(typeof time=='number'){return time;}var matches=time.match(/(^\d*\.?\d*)(\w*)/);var num=matches&&matches[1];var unit=matches&&matches[2];if(!num.length){return 0;}num=parseFloat(num);var mult=msUnits[unit]||1;return num*mult;}// ----- fin ----- //
// back in global
Outlayer.Item=Item;return Outlayer;});/**
 * Isotope Item
**/(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('isotope-layout/js/item',['outlayer/outlayer'],factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(require('outlayer'));}else{// browser global
window.Isotope=window.Isotope||{};window.Isotope.Item=factory(window.Outlayer);}})(window,function factory(Outlayer){'use strict';// -------------------------- Item -------------------------- //
// sub-class Outlayer Item
function Item(){Outlayer.Item.apply(this,arguments);}var proto=Item.prototype=Object.create(Outlayer.Item.prototype);var _create=proto._create;proto._create=function(){// assign id, used for original-order sorting
this.id=this.layout.itemGUID++;_create.call(this);this.sortData={};};proto.updateSortData=function(){if(this.isIgnored){return;}// default sorters
this.sortData.id=this.id;// for backward compatibility
this.sortData['original-order']=this.id;this.sortData.random=Math.random();// go thru getSortData obj and apply the sorters
var getSortData=this.layout.options.getSortData;var sorters=this.layout._sorters;for(var key in getSortData){var sorter=sorters[key];this.sortData[key]=sorter(this.element,this);}};var _destroy=proto.destroy;proto.destroy=function(){// call super
_destroy.apply(this,arguments);// reset display, #741
this.css({display:''});};return Item;});/**
 * Isotope LayoutMode
 */(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('isotope-layout/js/layout-mode',['get-size/get-size','outlayer/outlayer'],factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(require('get-size'),require('outlayer'));}else{// browser global
window.Isotope=window.Isotope||{};window.Isotope.LayoutMode=factory(window.getSize,window.Outlayer);}})(window,function factory(getSize,Outlayer){'use strict';// layout mode class
function LayoutMode(isotope){this.isotope=isotope;// link properties
if(isotope){this.options=isotope.options[this.namespace];this.element=isotope.element;this.items=isotope.filteredItems;this.size=isotope.size;}}var proto=LayoutMode.prototype;/**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/var facadeMethods=['_resetLayout','_getItemLayoutPosition','_manageStamp','_getContainerSize','_getElementOffset','needsResizeLayout','_getOption'];facadeMethods.forEach(function(methodName){proto[methodName]=function(){return Outlayer.prototype[methodName].apply(this.isotope,arguments);};});// -----  ----- //
// for horizontal layout modes, check vertical size
proto.needsVerticalResizeLayout=function(){// don't trigger if size did not change
var size=getSize(this.isotope.element);// check that this.size and size are there
// IE8 triggers resize on body size change, so they might not be
var hasSizes=this.isotope.size&&size;return hasSizes&&size.innerHeight!=this.isotope.size.innerHeight;};// ----- measurements ----- //
proto._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments);};proto.getColumnWidth=function(){this.getSegmentSize('column','Width');};proto.getRowHeight=function(){this.getSegmentSize('row','Height');};/**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/proto.getSegmentSize=function(segment,size){var segmentName=segment+size;var outerSize='outer'+size;// columnWidth / outerWidth // rowHeight / outerHeight
this._getMeasurement(segmentName,outerSize);// got rowHeight or columnWidth, we can chill
if(this[segmentName]){return;}// fall back to item of first element
var firstItemSize=this.getFirstItemSize();this[segmentName]=firstItemSize&&firstItemSize[outerSize]||// or size of container
this.isotope.size['inner'+size];};proto.getFirstItemSize=function(){var firstItem=this.isotope.filteredItems[0];return firstItem&&firstItem.element&&getSize(firstItem.element);};// ----- methods that should reference isotope ----- //
proto.layout=function(){this.isotope.layout.apply(this.isotope,arguments);};proto.getSize=function(){this.isotope.getSize();this.size=this.isotope.size;};// -------------------------- create -------------------------- //
LayoutMode.modes={};LayoutMode.create=function(namespace,options){function Mode(){LayoutMode.apply(this,arguments);}Mode.prototype=Object.create(proto);Mode.prototype.constructor=Mode;// default options
if(options){Mode.options=options;}Mode.prototype.namespace=namespace;// register in Isotope
LayoutMode.modes[namespace]=Mode;return Mode;};return LayoutMode;});/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('masonry-layout/masonry',['outlayer/outlayer','get-size/get-size'],factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(require('outlayer'),require('get-size'));}else{// browser global
window.Masonry=factory(window.Outlayer,window.getSize);}})(window,function factory(Outlayer,getSize){// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var Masonry=Outlayer.create('masonry');// isFitWidth -> fitWidth
Masonry.compatOptions.fitWidth='isFitWidth';var proto=Masonry.prototype;proto._resetLayout=function(){this.getSize();this._getMeasurement('columnWidth','outerWidth');this._getMeasurement('gutter','outerWidth');this.measureColumns();// reset column Y
this.colYs=[];for(var i=0;i<this.cols;i++){this.colYs.push(0);}this.maxY=0;this.horizontalColIndex=0;};proto.measureColumns=function(){this.getContainerWidth();// if columnWidth is 0, default to outerWidth of first item
if(!this.columnWidth){var firstItem=this.items[0];var firstItemElem=firstItem&&firstItem.element;// columnWidth fall back to item of first element
this.columnWidth=firstItemElem&&getSize(firstItemElem).outerWidth||// if first elem has no width, default to size of container
this.containerWidth;}var columnWidth=this.columnWidth+=this.gutter;// calculate columns
var containerWidth=this.containerWidth+this.gutter;var cols=containerWidth/columnWidth;// fix rounding errors, typically with gutters
var excess=columnWidth-containerWidth%columnWidth;// if overshoot is less than a pixel, round up, otherwise floor it
var mathMethod=excess&&excess<1?'round':'floor';cols=Math[mathMethod](cols);this.cols=Math.max(cols,1);};proto.getContainerWidth=function(){// container is parent if fit width
var isFitWidth=this._getOption('fitWidth');var container=isFitWidth?this.element.parentNode:this.element;// check that this.size and size are there
// IE8 triggers resize on body size change, so they might not be
var size=getSize(container);this.containerWidth=size&&size.innerWidth;};proto._getItemLayoutPosition=function(item){item.getSize();// how many columns does this brick span
var remainder=item.size.outerWidth%this.columnWidth;var mathMethod=remainder&&remainder<1?'round':'ceil';// round if off by 1 pixel, otherwise use ceil
var colSpan=Math[mathMethod](item.size.outerWidth/this.columnWidth);colSpan=Math.min(colSpan,this.cols);// use horizontal or top column position
var colPosMethod=this.options.horizontalOrder?'_getHorizontalColPosition':'_getTopColPosition';var colPosition=this[colPosMethod](colSpan,item);// position the brick
var position={x:this.columnWidth*colPosition.col,y:colPosition.y};// apply setHeight to necessary columns
var setHeight=colPosition.y+item.size.outerHeight;var setMax=colSpan+colPosition.col;for(var i=colPosition.col;i<setMax;i++){this.colYs[i]=setHeight;}return position;};proto._getTopColPosition=function(colSpan){var colGroup=this._getTopColGroup(colSpan);// get the minimum Y value from the columns
var minimumY=Math.min.apply(Math,colGroup);return{col:colGroup.indexOf(minimumY),y:minimumY};};/**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */proto._getTopColGroup=function(colSpan){if(colSpan<2){// if brick spans only one column, use all the column Ys
return this.colYs;}var colGroup=[];// how many different places could this brick fit horizontally
var groupCount=this.cols+1-colSpan;// for each group potential horizontal position
for(var i=0;i<groupCount;i++){colGroup[i]=this._getColGroupY(i,colSpan);}return colGroup;};proto._getColGroupY=function(col,colSpan){if(colSpan<2){return this.colYs[col];}// make an array of colY values for that one group
var groupColYs=this.colYs.slice(col,col+colSpan);// and get the max value of the array
return Math.max.apply(Math,groupColYs);};// get column position based on horizontal index. #873
proto._getHorizontalColPosition=function(colSpan,item){var col=this.horizontalColIndex%this.cols;var isOver=colSpan>1&&col+colSpan>this.cols;// shift to next row if item can't fit on current row
col=isOver?0:col;// don't let zero-size items take up space
var hasSize=item.size.outerWidth&&item.size.outerHeight;this.horizontalColIndex=hasSize?col+colSpan:this.horizontalColIndex;return{col:col,y:this._getColGroupY(col,colSpan)};};proto._manageStamp=function(stamp){var stampSize=getSize(stamp);var offset=this._getElementOffset(stamp);// get the columns that this stamp affects
var isOriginLeft=this._getOption('originLeft');var firstX=isOriginLeft?offset.left:offset.right;var lastX=firstX+stampSize.outerWidth;var firstCol=Math.floor(firstX/this.columnWidth);firstCol=Math.max(0,firstCol);var lastCol=Math.floor(lastX/this.columnWidth);// lastCol should not go over if multiple of columnWidth #425
lastCol-=lastX%this.columnWidth?0:1;lastCol=Math.min(this.cols-1,lastCol);// set colYs to bottom of the stamp
var isOriginTop=this._getOption('originTop');var stampMaxY=(isOriginTop?offset.top:offset.bottom)+stampSize.outerHeight;for(var i=firstCol;i<=lastCol;i++){this.colYs[i]=Math.max(stampMaxY,this.colYs[i]);}};proto._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var size={height:this.maxY};if(this._getOption('fitWidth')){size.width=this._getContainerFitWidth();}return size;};proto._getContainerFitWidth=function(){var unusedCols=0;// count unused columns
var i=this.cols;while(--i){if(this.colYs[i]!==0){break;}unusedCols++;}// fit container to columns that have been used
return(this.cols-unusedCols)*this.columnWidth-this.gutter;};proto.needsResizeLayout=function(){var previousWidth=this.containerWidth;this.getContainerWidth();return previousWidth!=this.containerWidth;};return Masonry;});/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('isotope-layout/js/layout-modes/masonry',['../layout-mode','masonry-layout/masonry'],factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(require('../layout-mode'),require('masonry-layout'));}else{// browser global
factory(window.Isotope.LayoutMode,window.Masonry);}})(window,function factory(LayoutMode,Masonry){'use strict';// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var MasonryMode=LayoutMode.create('masonry');var proto=MasonryMode.prototype;var keepModeMethods={_getElementOffset:true,layout:true,_getMeasurement:true};// inherit Masonry prototype
for(var method in Masonry.prototype){// do not inherit mode methods
if(!keepModeMethods[method]){proto[method]=Masonry.prototype[method];}}var measureColumns=proto.measureColumns;proto.measureColumns=function(){// set items, used if measuring first item
this.items=this.isotope.filteredItems;measureColumns.call(this);};// point to mode options for fitWidth
var _getOption=proto._getOption;proto._getOption=function(option){if(option=='fitWidth'){return this.options.isFitWidth!==undefined?this.options.isFitWidth:this.options.fitWidth;}return _getOption.apply(this.isotope,arguments);};return MasonryMode;});/**
 * fitRows layout mode
 */(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('isotope-layout/js/layout-modes/fit-rows',['../layout-mode'],factory);}else if((typeof exports==="undefined"?"undefined":_typeof2(exports))=='object'){// CommonJS
module.exports=factory(require('../layout-mode'));}else{// browser global
factory(window.Isotope.LayoutMode);}})(window,function factory(LayoutMode){'use strict';var FitRows=LayoutMode.create('fitRows');var proto=FitRows.prototype;proto._resetLayout=function(){this.x=0;this.y=0;this.maxY=0;this._getMeasurement('gutter','outerWidth');};proto._getItemLayoutPosition=function(item){item.getSize();var itemWidth=item.size.outerWidth+this.gutter;// if this element cannot fit in the current row
var containerWidth=this.isotope.size.innerWidth+this.gutter;if(this.x!==0&&itemWidth+this.x>containerWidth){this.x=0;this.y=this.maxY;}var position={x:this.x,y:this.y};this.maxY=Math.max(this.maxY,this.y+item.size.outerHeight);this.x+=itemWidth;return position;};proto._getContainerSize=function(){return{height:this.maxY};};return FitRows;});/**
 * vertical layout mode
 */(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define('isotope-layout/js/layout-modes/vertical',['../layout-mode'],factory);}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(require('../layout-mode'));}else{// browser global
factory(window.Isotope.LayoutMode);}})(window,function factory(LayoutMode){'use strict';var Vertical=LayoutMode.create('vertical',{horizontalAlignment:0});var proto=Vertical.prototype;proto._resetLayout=function(){this.y=0;};proto._getItemLayoutPosition=function(item){item.getSize();var x=(this.isotope.size.innerWidth-item.size.outerWidth)*this.options.horizontalAlignment;var y=this.y;this.y+=item.size.outerHeight;return{x:x,y:y};};proto._getContainerSize=function(){return{height:this.y};};return Vertical;});/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */(function(window,factory){// universal module definition
/* jshint strict: false *//*globals define, module, require */if(typeof define=='function'&&define.amd){// AMD
define(['outlayer/outlayer','get-size/get-size','desandro-matches-selector/matches-selector','fizzy-ui-utils/utils','isotope-layout/js/item','isotope-layout/js/layout-mode',// include default layout modes
'isotope-layout/js/layout-modes/masonry','isotope-layout/js/layout-modes/fit-rows','isotope-layout/js/layout-modes/vertical'],function(Outlayer,getSize,matchesSelector,utils,Item,LayoutMode){return factory(window,Outlayer,getSize,matchesSelector,utils,Item,LayoutMode);});}else if((typeof module==="undefined"?"undefined":_typeof2(module))=='object'&&module.exports){// CommonJS
module.exports=factory(window,require('outlayer'),require('get-size'),require('desandro-matches-selector'),require('fizzy-ui-utils'),require('isotope-layout/js/item'),require('isotope-layout/js/layout-mode'),// include default layout modes
require('isotope-layout/js/layout-modes/masonry'),require('isotope-layout/js/layout-modes/fit-rows'),require('isotope-layout/js/layout-modes/vertical'));}else{// browser global
window.Isotope=factory(window,window.Outlayer,window.getSize,window.matchesSelector,window.fizzyUIUtils,window.Isotope.Item,window.Isotope.LayoutMode);}})(window,function factory(window,Outlayer,getSize,matchesSelector,utils,Item,LayoutMode){// -------------------------- vars -------------------------- //
var jQuery=window.jQuery;// -------------------------- helpers -------------------------- //
var trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s+|\s+$/g,'');};// -------------------------- isotopeDefinition -------------------------- //
// create an Outlayer layout class
var Isotope=Outlayer.create('isotope',{layoutMode:'masonry',isJQueryFiltering:true,sortAscending:true});Isotope.Item=Item;Isotope.LayoutMode=LayoutMode;var proto=Isotope.prototype;proto._create=function(){this.itemGUID=0;// functions that sort items
this._sorters={};this._getSorters();// call super
Outlayer.prototype._create.call(this);// create layout modes
this.modes={};// start filteredItems with all items
this.filteredItems=this.items;// keep of track of sortBys
this.sortHistory=['original-order'];// create from registered layout modes
for(var name in LayoutMode.modes){this._initLayoutMode(name);}};proto.reloadItems=function(){// reset item ID counter
this.itemGUID=0;// call super
Outlayer.prototype.reloadItems.call(this);};proto._itemize=function(){var items=Outlayer.prototype._itemize.apply(this,arguments);// assign ID for original-order
for(var i=0;i<items.length;i++){var item=items[i];item.id=this.itemGUID++;}this._updateItemsSortData(items);return items;};// -------------------------- layout -------------------------- //
proto._initLayoutMode=function(name){var Mode=LayoutMode.modes[name];// set mode options
// HACK extend initial options, back-fill in default options
var initialOpts=this.options[name]||{};this.options[name]=Mode.options?utils.extend(Mode.options,initialOpts):initialOpts;// init layout mode instance
this.modes[name]=new Mode(this);};proto.layout=function(){// if first time doing layout, do all magic
if(!this._isLayoutInited&&this._getOption('initLayout')){this.arrange();return;}this._layout();};// private method to be used in layout() & magic()
proto._layout=function(){// don't animate first layout
var isInstant=this._getIsInstant();// layout flow
this._resetLayout();this._manageStamps();this.layoutItems(this.filteredItems,isInstant);// flag for initalized
this._isLayoutInited=true;};// filter + sort + layout
proto.arrange=function(opts){// set any options pass
this.option(opts);this._getIsInstant();// filter, sort, and layout
// filter
var filtered=this._filter(this.items);this.filteredItems=filtered.matches;this._bindArrangeComplete();if(this._isInstant){this._noTransition(this._hideReveal,[filtered]);}else{this._hideReveal(filtered);}this._sort();this._layout();};// alias to _init for main plugin method
proto._init=proto.arrange;proto._hideReveal=function(filtered){this.reveal(filtered.needReveal);this.hide(filtered.needHide);};// HACK
// Don't animate/transition first layout
// Or don't animate/transition other layouts
proto._getIsInstant=function(){var isLayoutInstant=this._getOption('layoutInstant');var isInstant=isLayoutInstant!==undefined?isLayoutInstant:!this._isLayoutInited;this._isInstant=isInstant;return isInstant;};// listen for layoutComplete, hideComplete and revealComplete
// to trigger arrangeComplete
proto._bindArrangeComplete=function(){// listen for 3 events to trigger arrangeComplete
var isLayoutComplete,isHideComplete,isRevealComplete;var _this=this;function arrangeParallelCallback(){if(isLayoutComplete&&isHideComplete&&isRevealComplete){_this.dispatchEvent('arrangeComplete',null,[_this.filteredItems]);}}this.once('layoutComplete',function(){isLayoutComplete=true;arrangeParallelCallback();});this.once('hideComplete',function(){isHideComplete=true;arrangeParallelCallback();});this.once('revealComplete',function(){isRevealComplete=true;arrangeParallelCallback();});};// -------------------------- filter -------------------------- //
proto._filter=function(items){var filter=this.options.filter;filter=filter||'*';var matches=[];var hiddenMatched=[];var visibleUnmatched=[];var test=this._getFilterTest(filter);// test each item
for(var i=0;i<items.length;i++){var item=items[i];if(item.isIgnored){continue;}// add item to either matched or unmatched group
var isMatched=test(item);// item.isFilterMatched = isMatched;
// add to matches if its a match
if(isMatched){matches.push(item);}// add to additional group if item needs to be hidden or revealed
if(isMatched&&item.isHidden){hiddenMatched.push(item);}else if(!isMatched&&!item.isHidden){visibleUnmatched.push(item);}}// return collections of items to be manipulated
return{matches:matches,needReveal:hiddenMatched,needHide:visibleUnmatched};};// get a jQuery, function, or a matchesSelector test given the filter
proto._getFilterTest=function(filter){if(jQuery&&this.options.isJQueryFiltering){// use jQuery
return function(item){return jQuery(item.element).is(filter);};}if(typeof filter=='function'){// use filter as function
return function(item){return filter(item.element);};}// default, use filter as selector string
return function(item){return matchesSelector(item.element,filter);};};// -------------------------- sorting -------------------------- //
/**
   * @params {Array} elems
   * @public
   */proto.updateSortData=function(elems){// get items
var items;if(elems){elems=utils.makeArray(elems);items=this.getItems(elems);}else{// update all items if no elems provided
items=this.items;}this._getSorters();this._updateItemsSortData(items);};proto._getSorters=function(){var getSortData=this.options.getSortData;for(var key in getSortData){var sorter=getSortData[key];this._sorters[key]=mungeSorter(sorter);}};/**
   * @params {Array} items - of Isotope.Items
   * @private
   */proto._updateItemsSortData=function(items){// do not update if no items
var len=items&&items.length;for(var i=0;len&&i<len;i++){var item=items[i];item.updateSortData();}};// ----- munge sorter ----- //
// encapsulate this, as we just need mungeSorter
// other functions in here are just for munging
var mungeSorter=function(){// add a magic layer to sorters for convienent shorthands
// `.foo-bar` will use the text of .foo-bar querySelector
// `[foo-bar]` will use attribute
// you can also add parser
// `.foo-bar parseInt` will parse that as a number
function mungeSorter(sorter){// if not a string, return function or whatever it is
if(typeof sorter!='string'){return sorter;}// parse the sorter string
var args=trim(sorter).split(' ');var query=args[0];// check if query looks like [an-attribute]
var attrMatch=query.match(/^\[(.+)\]$/);var attr=attrMatch&&attrMatch[1];var getValue=getValueGetter(attr,query);// use second argument as a parser
var parser=Isotope.sortDataParsers[args[1]];// parse the value, if there was a parser
sorter=parser?function(elem){return elem&&parser(getValue(elem));}:// otherwise just return value
function(elem){return elem&&getValue(elem);};return sorter;}// get an attribute getter, or get text of the querySelector
function getValueGetter(attr,query){// if query looks like [foo-bar], get attribute
if(attr){return function getAttribute(elem){return elem.getAttribute(attr);};}// otherwise, assume its a querySelector, and get its text
return function getChildText(elem){var child=elem.querySelector(query);return child&&child.textContent;};}return mungeSorter;}();// parsers used in getSortData shortcut strings
Isotope.sortDataParsers={'parseInt':function(_parseInt){function parseInt(_x){return _parseInt.apply(this,arguments);}parseInt.toString=function(){return _parseInt.toString();};return parseInt;}(function(val){return parseInt(val,10);}),'parseFloat':function(_parseFloat){function parseFloat(_x2){return _parseFloat.apply(this,arguments);}parseFloat.toString=function(){return _parseFloat.toString();};return parseFloat;}(function(val){return parseFloat(val);})};// ----- sort method ----- //
// sort filteredItem order
proto._sort=function(){if(!this.options.sortBy){return;}// keep track of sortBy History
var sortBys=utils.makeArray(this.options.sortBy);if(!this._getIsSameSortBy(sortBys)){// concat all sortBy and sortHistory, add to front, oldest goes in last
this.sortHistory=sortBys.concat(this.sortHistory);}// sort magic
var itemSorter=getItemSorter(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(itemSorter);};// check if sortBys is same as start of sortHistory
proto._getIsSameSortBy=function(sortBys){for(var i=0;i<sortBys.length;i++){if(sortBys[i]!=this.sortHistory[i]){return false;}}return true;};// returns a function used for sorting
function getItemSorter(sortBys,sortAsc){return function sorter(itemA,itemB){// cycle through all sortKeys
for(var i=0;i<sortBys.length;i++){var sortBy=sortBys[i];var a=itemA.sortData[sortBy];var b=itemB.sortData[sortBy];if(a>b||a<b){// if sortAsc is an object, use the value given the sortBy key
var isAscending=sortAsc[sortBy]!==undefined?sortAsc[sortBy]:sortAsc;var direction=isAscending?1:-1;return(a>b?1:-1)*direction;}}return 0;};}// -------------------------- methods -------------------------- //
// get layout mode
proto._mode=function(){var layoutMode=this.options.layoutMode;var mode=this.modes[layoutMode];if(!mode){// TODO console.error
throw new Error('No layout mode: '+layoutMode);}// HACK sync mode's options
// any options set after init for layout mode need to be synced
mode.options=this.options[layoutMode];return mode;};proto._resetLayout=function(){// trigger original reset layout
Outlayer.prototype._resetLayout.call(this);this._mode()._resetLayout();};proto._getItemLayoutPosition=function(item){return this._mode()._getItemLayoutPosition(item);};proto._manageStamp=function(stamp){this._mode()._manageStamp(stamp);};proto._getContainerSize=function(){return this._mode()._getContainerSize();};proto.needsResizeLayout=function(){return this._mode().needsResizeLayout();};// -------------------------- adding & removing -------------------------- //
// HEADS UP overwrites default Outlayer appended
proto.appended=function(elems){var items=this.addItems(elems);if(!items.length){return;}// filter, layout, reveal new items
var filteredItems=this._filterRevealAdded(items);// add to filteredItems
this.filteredItems=this.filteredItems.concat(filteredItems);};// HEADS UP overwrites default Outlayer prepended
proto.prepended=function(elems){var items=this._itemize(elems);if(!items.length){return;}// start new layout
this._resetLayout();this._manageStamps();// filter, layout, reveal new items
var filteredItems=this._filterRevealAdded(items);// layout previous items
this.layoutItems(this.filteredItems);// add to items and filteredItems
this.filteredItems=filteredItems.concat(this.filteredItems);this.items=items.concat(this.items);};proto._filterRevealAdded=function(items){var filtered=this._filter(items);this.hide(filtered.needHide);// reveal all new items
this.reveal(filtered.matches);// layout new items, no transition
this.layoutItems(filtered.matches,true);return filtered.matches;};/**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */proto.insert=function(elems){var items=this.addItems(elems);if(!items.length){return;}// append item elements
var i,item;var len=items.length;for(i=0;i<len;i++){item=items[i];this.element.appendChild(item.element);}// filter new stuff
var filteredInsertItems=this._filter(items).matches;// set flag
for(i=0;i<len;i++){items[i].isLayoutInstant=true;}this.arrange();// reset flag
for(i=0;i<len;i++){delete items[i].isLayoutInstant;}this.reveal(filteredInsertItems);};var _remove=proto.remove;proto.remove=function(elems){elems=utils.makeArray(elems);var removeItems=this.getItems(elems);// do regular thing
_remove.call(this,elems);// bail if no items to remove
var len=removeItems&&removeItems.length;// remove elems from filteredItems
for(var i=0;len&&i<len;i++){var item=removeItems[i];// remove item from collection
utils.removeFrom(this.filteredItems,item);}};proto.shuffle=function(){// update random sortData
for(var i=0;i<this.items.length;i++){var item=this.items[i];item.sortData.random=Math.random();}this.options.sortBy='random';this._sort();this._layout();};/**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */proto._noTransition=function(fn,args){// save transitionDuration before disabling
var transitionDuration=this.options.transitionDuration;// disable transition
this.options.transitionDuration=0;// do it
var returnValue=fn.apply(this,args);// re-enable transition for reveal
this.options.transitionDuration=transitionDuration;return returnValue;};// ----- helper methods ----- //
/**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */proto.getFilteredItemElements=function(){return this.filteredItems.map(function(item){return item.element;});};// -----  ----- //
return Isotope;});jQuery(function($){// foundation
jQuery(document).foundation();// scroll to top
function scrollTop(e){jQuery("html, body").animate({scrollTop:0},"slow");e.preventDefault();return false;}function scrollTopFadeIn(){if(jQuery('.is-stuck').length!==0){jQuery('.scroll-top').fadeIn(250);}else{jQuery('.scroll-top').fadeOut(250);}};function footerPosition(){var contentHeight=jQuery(window).outerHeight();var footerHeight=jQuery('footer').outerHeight();var footerTop=jQuery('footer').position().top+footerHeight;if(footerTop<contentHeight&&jQuery('body').hasClass('admin-bar')){jQuery('.footer').css('margin-top',-32+(contentHeight-footerTop)+'px');}else if(footerTop<contentHeight){jQuery('.footer').css('margin-top',contentHeight-footerTop+'px');}}// For the stacked case studies shortcode make all cell height of largest, since they're using cols with separate shortcodes
function equalCaseStudies(){var $cells=jQuery('.cs-stacked .cell');var maxHeight=0;// Creates the height rule, just in case there wasn't one already
$cells.css('height','auto');$cells.each(function(){var cellHeight=$(this).outerHeight();if(cellHeight>maxHeight){maxHeight=cellHeight;}});$cells.css('height',maxHeight);}jQuery(document).ready(function(){footerPosition();scrollTopFadeIn();equalCaseStudies();});jQuery(window).resize(function(){footerPosition();equalCaseStudies();});jQuery(window).scroll(function(){scrollTopFadeIn();});jQuery('.scroll-top').on("click",function(e){scrollTop(e);});jQuery('.cat-toggle').on('click',function(){jQuery(this).parent('.link-headline').toggleClass("open");jQuery(this).parent('.link-headline').siblings(".links").slideToggle();});});