/* Map, WeakMap, Set, WeakSet */
//맵은 키는 문자열 외에도 어떤 값, 객체도 가능
var map = new Map([['aney', 'AneyKim']]);

map.set('hero', 'Hero');

map.get('aney');//'AneyKim'
map.size;		//2
map.has('hero');//true
map.has('Kim');//false
map.entries(); // {['aney', 'AneyKim'], ['hero', 'Hero']}
map.keys();
map.values();

map.delete('hero');

map.clear();


//WeakMap의 키는 기존 객체를 약한 참조해서 가비지컬렉션을 방해하지 않습니다.
 //대신 entries, keys, values 메소드를 사용할 수 없습니다.
var weakMapObj = {example: 'any'};
var weakMap = new WeakMap();
weakMap.set(weakMapObj, 'hello');
weakMap.get(weakMapObj); // 'hello'

var set = new Set(['Aney']);
set.add('hero');
set.has('Aney'); // true
set.has('nero'); // false
set.size; // 2
set.entries(); // {['Aney', 'Aney'], ['hero', 'hero']}
set.keys(); // {'Aney', 'hero'}
set.values(); // {'Aney', 'hero'}
set.delete('hero');
set.clear();

//셋은 중복 불가능, 중간 값 확인 불가능(set[1] 확인 못함.)

var weakSetObj = {example: 'any'};
var weakSet = new WeakSet();
weakSet.add(weakSetObj);

//WeakSet은 객체만을 값으로 받습니다.
var weakSetObj = {example: 'any'};
var weakSet = new WeakSet();
weakSet.add(weakSetObj);