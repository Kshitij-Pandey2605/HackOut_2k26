import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Reset Password</h2>
        <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
          Enter your email to receive recovery instructions
        </p>
      </div>

      {submitted ? (
        <div className="p-4 bg-eco-emerald/10 border border-eco-emerald/20 rounded-xl text-center">
          <p className="text-sm font-medium text-eco-emerald">Password reset link sent!</p>
          <p className="text-xs text-slate-400 mt-1">Check your inbox for further instructions.</p>
          <Link to="/login" className="inline-block mt-4 text-xs font-semibold text-eco-emerald hover:underline">
            Back to Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Registered Work Email"
            type="email"
            placeholder="officer@enterprise.com"
            {...register('email', { required: 'Email is required' })}
            error={errors.email?.message}
          />
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
          <div className="text-center text-xs">
            <Link to="/login" className="text-slate-400 hover:text-white">
              Cancel and return to Login
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
export default ForgotPasswordPage;
