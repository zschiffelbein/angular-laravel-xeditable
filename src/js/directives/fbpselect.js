//select
angular.module('xeditable').directive('editableFbpSelect', ['editableDirectiveFactory',
    function (editableDirectiveFactory) {
        return editableDirectiveFactory({
            directiveName: 'editableFbpSelect',
            inputTpl: '<fbp-select></fbp-select>',
            render: function () {

                this.parent.render.call(this);

                this.inputEl.removeAttr('class');
            }
        });
    }]);