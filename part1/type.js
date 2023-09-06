var name1 = ['Kang', 'Kim', 'Lee'];
var name2 = { name: 'Kang' }; // ?는 옵션 (있어도 되고 없어도 됨)
var name3 = 'Kang'; // string 또는 number 타입
var name4 = 'Kang';
var john = [1, true];
var john2 = { name: 'Kang', age: '26' };
// 파라미터에 number가 들어와야 하고, number를 리턴해야 함
function func1(x) {
    return x * 2;
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
