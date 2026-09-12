import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { USER_ROLES } from '@/constants/roles';

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // MVP Mock login authentication
    login(
      { email: data.email, name: data.email.split('@')[0] },
      'mock_jwt_token_sample',
      USER_ROLES.SUPPLIER
    );
    navigate('/supplier/dashboard');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Sign In to CarbonSphere</h2>
        <p className="text-xs text-slate-500 dark:text-carbon-300 mt-1">
          Access your real-time carbon inventory and trading desk
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Corporate Email"
          type="email"
          placeholder="officer@enterprise.com"
          {...register('email', { required: 'Corporate email is required' })}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register('password', { required: 'Password is required' })}
          error={errors.password?.message}
        />

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-500">
            <input type="checkbox" className="rounded border-slate-300 text-eco-emerald focus:ring-eco-emerald" />
            <span>Remember device</span>
          </label>
          <Link to="/forgot-password" className="text-eco-emerald hover:underline font-medium">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Sign In
        </Button>
      </form>

      <div className="text-center text-xs text-slate-500">
        Don't have an account?{' '}
        <Link to="/signup" className="text-eco-emerald font-semibold hover:underline">
          Create Organization Account
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
