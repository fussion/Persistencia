/**
 * Created with JetBrains WebStorm.
 * User: nochtap
 * Date: 7/30/12
 * Time: 10:58 AM
 * To change this template use File | Settings | File Templates.
 */
$data.Class.define('JayScrum.Views.ThemeSetting', JayScrum.FrameView, null, {
    constructor:function(name, path, tplSource){
        this.templateName = name || 'guiSettingPage-template';
        this.i_scroll = null;
    },
    initializeView:function(){
        JayScrum.app.hideLoading();
        $("h1.main-header").addClass("animate");
        $(".theme-font").each(function () {
            if ($(this).attr('data-font') == getSetting('settings').font)
                $(this).addClass('active');
        });
        $(".theme-box").each(function () {
            if ($(this).attr('data-theme') == getSetting('settings').theme)
                $(this).addClass('active');
        });

        this.i_scroll = JayScrum.app.initScrollById("transition-settings");
    },
    tearDownView:function(){
        if(this.i_scroll){
            this.i_scroll.destroy();
        }
        this.i_scroll = null;
    }
}, null);
$data.Class.define('JayScrum.Frames.ThemeSettings', JayScrum.Frame, null, {
    constructor:function () {
        //register frameViews
        this.registerView('theme', new JayScrum.Views.ThemeSetting('guiSettingPage-template'));
        this.registerMetaView('themeMeta', new JayScrum.FrameView('jayAppMetaDefault'));
        this.defaultViewName='theme';
        this.selectMetaView('themeMeta');
        this.data = ko.observable({
            name:'ui settings'
        });
    }
}, null);