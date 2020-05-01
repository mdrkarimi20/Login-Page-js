let h1 = VueJS.createElement("h1", {}, "ورود");
let h3 = VueJS.createElement("h3", {}, "ورود به حساب کاربری");
let h4 = VueJS.createElement("h4", {}, "جهت ورود به برنامه نام کاریری و رمز عبور خود وارد نمائید");
let i1 = VueJS.createElement("i", { class: "name" });
let input1 = VueJS.createElement("input", {
    type: "text",
    name: "login",
    placeholder: "نام کاربری",
});
let iUser = VueJS.createElement("i", { class: "fas fa-user" });
let i2 = VueJS.createElement("i", { class: "ramz" });
let input2 = VueJS.createElement("input", {
    type: "text",
    name: "password",
    placeholder: "رمز عبور"
});
let iLock = VueJS.createElement("i", { class: "fas fa-lock" });
let i3 = VueJS.createElement("i", { class: "Security" });
let input3 = VueJS.createElement("input", {
    type: "text",
    class: "Security",
    name: "Security",
    placeholder: "کد امنیتی",
});
let iTh = VueJS.createElement("i", { class: "fas fa-th" });
let imgSecurityRandom = VueJS.createElement("img", { src: "./img/download.png" });
let iSync = VueJS.createElement("i", { class: "fas fa-sync" });
let securityRandom = VueJS.createElement("i", { class: "security-random" }, [imgSecurityRandom, iSync]);
let input4 = VueJS.createElement("input", {
    type: "submit",
    value: "ورود"
});
let form = VueJS.createElement("form", { method: "post", action: "http://your-web-domain.com/cgi-bin/formmail.cgi" }, [i1, input1, iUser, i2, input2, iLock, i3, input3, iTh, securityRandom, input4]);






const main = VueJS.createElement("div", { className: "right-side" }, [h1, h3, h4, form]);

VueJS.export("container", main);