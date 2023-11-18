"use client";

import { signIn } from "next-auth/react";
import React from "react";
import Button from "../components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";
import Heading from "../components/Heading";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AdminPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    const callback = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(callback);

    setIsLoading(false);

    if (callback?.ok) {
      toast.success("Logged in");
      router.push("/admin/dashbord");
    }

    if (callback?.error) {
      toast.error(callback.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-lg font-semibold">Admin Login</div>
      {/* body */}
      <div className="mt-8 w-full max-w-md">
        <Heading title="Welcome back" subtitle="Login to your account!" />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          type="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <div className="flex flex-col gap-2 p-6">
          <div className="flex flex-row items-center gap-4 w-full">
            <Button
              disabled={isLoading}
              label="Log in"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
