/**
 * Created by lyon on 2017/7/26.
 */
Vue.component('select2', {
    props: ['options', 'value'],
    template: '#select2-template',
    // mounted 被调用时 el 被vm.$el替换 该钩子在服务器端渲染期间不被调用
    mounted: function () {
        var vm = this;
        $(this.$el)
            .select2({ data: this.options })
            .val(this.value)
            .trigger('change')
            .on('change', function () {
                //触发当前实例上的事件。附加参数都会传给监听器回调。
                vm.$emit('input', this.value)
            })
    },
    watch: {
        value: function (value) {
            $(this.$el).val(value).trigger('change');
        },
        options: function (options) {
            $(this.$el).select2({ data: options })
        }
    },
    //实例销毁后调用，销毁后调用，监听会解绑
    destroyed: function () {
        $(this.$el).off().select2('destroy')
    }
});

var vm = new Vue({
    el: '#el',
    template: '#demo-template',
    data: {
        selected: 2,
        options: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'World' }
        ]
    }
});