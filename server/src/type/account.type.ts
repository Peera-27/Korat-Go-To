import Elysia, { Static, t } from "elysia"
import { _pagination, CreatePagination } from "./pagination.type"

const _login = t.Object({
    username: t.String(),
    password: t.String(),
})
const _register = t.Object({
    username: t.String(),
    password: t.String(),
    email: t.String()
})

export const AccountType = t.Object({
    ...t.Omit(_register, ['password']).properties,
    id: t.String(),
    username: t.String(),
})
export const _user = t.Object({
    ...AccountType.properties,
})
export const _acoount = t.Object({
    token: t.String(),
    user: _user
})
export const AccountDto = new Elysia().model({
    register: _register,
    login: _login,
    account: _acoount
})
const _userPagination = t.Object({
    ..._pagination.properties,
    username: t.Optional(t.String()),
    email: t.Optional(t.String())

})
export const _userPaginator = CreatePagination(_user, _userPagination)
export const UserDto = new Elysia().model({
    pagination: t.Optional(_userPagination),
    users: _userPaginator,
    user: _user,
})
export type userPaginatoin = Static<typeof _userPagination>
export type userPaginator = Static<typeof _userPaginator>

export type user = Static<typeof _user>
export type register = Static<typeof _register>
export type login = Static<typeof _login>