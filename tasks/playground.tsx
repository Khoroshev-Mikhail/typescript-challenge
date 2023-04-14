//keyof возвращает массив? с ключами объекта ('z' | 'b' | 'r')
const Ara = {
    b: 'bb',
    z: 'zz'
}
type Ara = {
    [k in keyof typeof Ara] : k
}
const bara: keyof Ara = 'z'
