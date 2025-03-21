// 所有request请求放这里，在login.vue里引用
import axios from "axios";

let isRefreshing = false

const request = axios.create({
    baseURL: "https://qarfl.rrrexyz.icu/api"
})

const setToken = (access_token, refresh_token) => {
    request.defaults.headers["Authorization"] = "Bearer ${access_token}"
    localStorage.setItem("access_token", access_token)
    localStorage.setItem("refresh_token", refresh_token)
}

const refreshToken = () => {
    //返回的是一个包含更新后的token和refresh——token
    var params = localStorage.getItem('refresh_token')
    return request.get("/refresh/token", {
        headers: {
            "Authorization": "Bearer ${params}"
        }
    })
}

const login = async (data) => {
    try {
        const response = await request.post(
            "/login", data = data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        )
        setToken(response.data.access_token, response.data.refresh_token)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

request.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    }, (error) => {
        if (error.response.status === 401) {
            var config = error.config
            if (!isRefreshing) {
                isRefreshing = true
                return refreshToken().then(
                    (res) => {
                        const access_token = res.access_token
                        const refresh_token = res.refresh_token
                        //刷新token，更新Authorization
                        setToken(access_token, refresh_token)
                        config.headers["Authorization"] = "Bearer ${access_token}"
                        //将所有失败的函数重新执行
                        requests.forEach((cb) => cb(access_token));
                        requests = []
                        return request(config)
                    }, (err) => {
                        rouyer.push("/login")
                    }
                ).catch((ref) => {
                    console.error("refresh_token error =>", res)
                }).finally(() => {
                    isRefreshing = false
                })

            } else {
                //保存函数，等待执行
                new Promise((resolve) => {
                    requests.push((access_token) => {
                        config.headers["Authorization"] = "Bearer ${access_token}"
                        resolve(request(config))
                    })
                })
            }
        }
    }
)

const createPost = async () => {
    try{
        const newPost = await request.post('/project')
        console.log(newPost)
        return newPost
    }catch(error){
        console.log(error)
    }
}

export {
    login,
    createPost,
}