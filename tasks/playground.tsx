interface Ara {
    a: 'bb',
    v: 'zz'
}
interface Bara {
    title: 'gg'
}

const bara:Pick<Ara, 'a' | 'v'> = {
    a: 'bb',
    v: 'zz'
}