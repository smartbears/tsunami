App.DatePicker = Ember.TextField.extend({

    didInsertElement: function() {
        var fmt, onChangeDate;
        fmt = this.get('format');
        onChangeDate = (function(_this) {
            return function(ev) {
                return _this.set('date', ev.date);
            };
        })(this);
        return this.$().datetimepicker({
            format: fmt,
            autoclose: true
        }).on('changeDate', onChangeDate);
    },
    willDestroyElement: function() {
        return this.$().datetimepicker('remove');
    }
});
