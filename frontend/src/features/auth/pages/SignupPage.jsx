import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const SignupPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Navigate to role selection upon initial account setup
    navigate('/role-selection');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Create Your Organization Account</h2>
        <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
          Join the trusted circular carbon network
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Organization Name"
          placeholder="Acme Biochar / GreenTech Industries"
          {...register('orgName', { required: 'Organization name is required' })}
          error={errors.orgName?.message}
        />

        <Input
          label="Work Email"
          type="email"
          placeholder="sustainability@company.com"
          {...register('email', { required: 'Email is required' })}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum 8 characters' } })}
          error={errors.password?.message}
        />

        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Continue to Role Selection
        </Button>
      </form>

      <div className="text-center text-xs text-slate-500">
        Already registered?{' '}
        <Link to="/login" className="text-eco-emerald font-semibold hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};
export default SignupPage;
