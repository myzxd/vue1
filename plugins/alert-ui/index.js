import Loding from "../../common/loading/index"
export default {
    install(Vue) {
        var loding = Vue.extend(Loding);
        var lodings = new loding();
        lodings.$mount()
        document.body.appendChild(lodings.$el)
        Vue.prototype.$loading = {
            show() {
                lodings.show()
            },
            hide() {
                lodings.hide()
            }
        }
    }
}