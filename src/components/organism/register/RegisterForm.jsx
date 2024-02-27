import LoginInfoSection from '@/components/molecule/register/Sections/LoginInfoSection';
import NameSection from '@/components/molecule/register/Sections/NameSection';
import PhoneSection from '@/components/molecule/register/Sections/PhoneSection';
import TermSection from '@/components/molecule/register/Sections/TermSection';

const RegisterForm = ({ register }) => {
  return (
    <form className="register-form flex w-[1720px]">
      <NameSection register={register} />
      <PhoneSection register={register} />
      <LoginInfoSection register={register} />
      <TermSection register={register} />
    </form>
  );
};

export default RegisterForm;
