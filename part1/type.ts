let name1 :string[] = ['Kang', 'Kim', 'Lee']
let name2 :{ name? : string } = { name : 'Kang' } // ?는 옵션 (있어도 되고 없어도 됨)
let name3 :string | number = 'Kang'; // string 또는 number 타입


// type을 정의할 수 있음
type NameType = string | number;
let name4 :NameType = 'Kang';

type Member = [number, boolean];
let john :Member = [1, true];

type Member2 = { [key :string] : string }; // 글자로 된 모든 object 속성의 타입은 string
let john2 :Member2 = { name : 'Kang', age : '26' };


// 파라미터에 number가 들어와야 하고, number를 리턴해야 함
function func1(x :number) :number{
    return x * 2
}



class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}