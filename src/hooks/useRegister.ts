type IData = {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
}

export const useRegister = async (url: string, data: IData) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(data),
    })

    return await res.json()
}
