import tw, { styled } from 'twin.macro';

export const InputField = styled.input`
  ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
  ${({ errors }) => errors && tw`border-red-500`}
`;
