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
let securityRandom = VueJS.createElement("div", { class: "security-random" }, [imgSecurityRandom, iSync]);
let input4 = VueJS.createElement("input", {
    type: "submit",
    value: "ورود"
});
let input5 = VueJS.createElement("input", { type: "checkbox" });
let label = VueJS.createElement("label", {}, ["مرا به خاطر بسپار", input5]);
let remember = VueJS.createElement("div", { class: "remember" }, [label]);
let form = VueJS.createElement("form", { method: "post", action: "http://your-web-domain.com/cgi-bin/formmail.cgi" }, [i1, input1, iUser, i2, input2, iLock, i3, input3, iTh, securityRandom, input4, remember]);

let rightSide = VueJS.createElement("div", { className: "right-side" }, [h1, h3, h4, form]);



let Multi = VueJS.createElement("h3", {}, "Multi Anti-Virus & Cybersecurity");
let Radar = VueJS.createElement("img", {
    src: "./img/radar-angle.png",
    class: "radar-angle",
    alt: "radar-angle"
});
let logo = VueJS.createElement("img", {
    src: "./img/logo.png",
    alt: "logo"
});
let radarAngle = VueJS.createElement("span", { class: "radar-angle" });
let circle1 = VueJS.createElement("span", { class: "circle" });
let circle2 = VueJS.createElement("span", { class: "circle" });
let circle3 = VueJS.createElement("span", { class: "circle" });
let circle4 = VueJS.createElement("span", { class: "circle" });
let circle5 = VueJS.createElement("span", { class: "circle" });
let circle6 = VueJS.createElement("span", { class: "circle" });
let wave = VueJS.createElement("div", { class: "wave" }, [logo, radarAngle, circle1, circle2, circle3, circle4, circle5, circle6]);
let leftSide = VueJS.createElement("div", { className: "left-side" }, [Multi, Radar, wave]);

const main = VueJS.createElement("div", { className: "container" }, [rightSide, leftSide]);
VueJS.export("root", main);