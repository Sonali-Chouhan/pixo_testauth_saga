import React, { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { LoginCreate } from "../saga/auth/auth.action";
import { useNavigate } from "react-router-dom";
import Toast from "../component/Notifications/ToastNotification";


const Login = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth } = useSelector((state) => {
    return {
      isAuth: state?.login?.isAuth
    }
  })
  useEffect(() => {
    if (isAuth?.token) {
      navigate('/dashboard');
    }
  }, [isAuth?.token, navigate]);

  const onSubmit = (data) => {
    if (data?.email === "sonali123@gmail.com" && data?.password === "123") {
      const token = "agxasxsaxgsy45qw6789qwtfsxgvx3456712whwshjxb";
      dispatch(LoginCreate({ token, ...data }))
    } else {
      Toast('Invalid Credentials!', 'error')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} /><br />
        <input {...register("password")} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}
export default Login


