const initState = {
    user: null
}

const UserReducer = (state=initState, action) =>{
    switch (action.type){
        case "USER_LOGIN":
            return {
                //chỉ sửa mỗi user, tránh trường hợp initState mở rộng
                ...state,
                "user": action.payload
            }
        case "USER_LOGOUT":
            return {
                //chỉ sửa mỗi user, tránh trường hợp initState mở rộng
                ...state,
                "user": null
            }
        default:
            return state
    }
}

export default UserReducer