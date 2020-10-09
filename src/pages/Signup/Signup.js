import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useSignUp from 'hooks/useSignup';
import { signUpSchema } from 'utils/authValidation';
import { InputField } from 'utils/auth.style';

const Signup = () => {
  const [signUp, signUpInfo] = useSignUp();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data) => {
    signUp(data);
    reset();
  };

  return (
    <div className='container mx-auto my-10 w-3/4 md:w-1/3 rounded-md shadow-xl overflow-hidden transform'>
      <div className='bg-gray-900 p-4 lg:px-10 lg:py-5 overflow-hidden'>
        <form onSubmit={handleSubmit(onSubmit)} className='my-4 py-4'>
          <h1 className=' text-gray-300 font-bold mb-5'>CREATE YOUR ACCOUNT</h1>
          <div className='mb-4'>
            <label
              className='block text-gray-400 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Your name
            </label>
            <InputField
              errors={errors.name?.message}
              id='name'
              type='text'
              placeholder='Denys Don'
              name='name'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              {errors.name?.message}
            </p>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-400 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email address
            </label>
            <InputField
              errors={errors.email?.message}
              id='email'
              type='text'
              placeholder='you@example.com'
              name='email'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              {errors.email?.message}
            </p>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-400 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <InputField
              errors={errors.password?.message}
              id='password'
              type='password'
              placeholder='**********'
              name='password'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              {errors.password?.message}
            </p>
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-400 text-sm font-bold mb-2'
              htmlFor='passwordConfirm'
            >
              Confirm Password
            </label>
            <InputField
              errors={errors.passwordConfirm?.message}
              id='passwordConfirm'
              type='password'
              placeholder='**********'
              name='passwordConfirm'
              ref={register}
            />
            <p className='text-red-500 text-xs italic'>
              {errors.passwordConfirm?.message}
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              disabled={signUpInfo.isLoading}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              {signUpInfo.isLoading ? 'LOADING...' : 'SIGN UP'}
            </button>
            <Link
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              to='#'
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
