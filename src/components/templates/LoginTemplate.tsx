import LoginSection from "../organisms/LoginSection";
import CompanySection from "../organisms/CompanySection";

const LoginTemplates: React.FC = () => {

    return (  
        <div className="flex h-screen bg-gray-100">
            <LoginSection />
            <CompanySection />
        </div>
    );
}

export default LoginTemplates;