
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfUse = () => {
  // Terms of Use placeholder text
  const termsOfUseText = `
    These Terms of Use govern your access to and use of our services. By using our services, you agree to be bound by these terms.
    We provide a platform that enables users to interact with artificial intelligence models for various purposes.
    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
    We reserve the right to modify, suspend, or terminate our services at any time without notice.
    You retain ownership of any content you submit, but grant us a license to use, reproduce, and distribute such content.
    We may collect and use information as described in our Privacy Policy.
    Our services are provided "as is" without warranties of any kind, either express or implied.
    We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
    These terms constitute the entire agreement between you and us regarding your use of our services.
    If any provision of these terms is found to be invalid, the remaining provisions will continue in effect.
  `;

  return (
    <div className="animate-fade-in">
      <Card className="bg-[#1e212b]/80 border-[#3d4155]">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#D6BCFA]">Terms of Use</h2>
          <div className="space-y-2 text-gray-200 leading-relaxed">
            {termsOfUseText.split('\n').filter(line => line.trim()).map((paragraph, i) => (
              <p key={i} className="mb-2">{paragraph.trim()}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfUse;
