import GetInTouch from '@/components/shared/GetInTouch';
import { privacyPolicy } from '@/constants/images';
import { privacyPolicyMobile } from '@/constants/mobileImages';
import Image from 'next/image';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section>
      <Image
        src={privacyPolicy}
        alt='Terms of use'
        width={1512}
        height={400}
        className='md:block hidden w-full h-[400px]'
      />
      <Image
        src={privacyPolicyMobile}
        alt='Terms of use'
        width={400}
        height={220}
        className='md:hidden w-full h-[220px]'
      />
      <div className='md:pt-[120px] pt-[60px] md:pb-0 pb-[60px] md:px-[90px] px-6'>
        <h3 className='custom-header'>Privacy Policy</h3>
        <ul className='md:mt-14 mt-6'>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              Svalbard Experts is determined to ensure the accuracy,
              confidentiality and security of the personal data the company
              processes on you. This data protection policy is intended to
              inform you about which personal data the company collects, how
              Svalbard Experts uses the data and who has access to the data.
            </p>
            <p>
              This data protection policy applies to the personal data of
              Svalbard Experts customers. This policy will refer to Svalbard
              Experts as we or us and to customers as you. 
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              Personal data within the meaning of this policy is information
              about an identified or an identifiable person, i.e., information
              that can be directly or indirectly linked to a particular person.
              Data that is unidentifiable or anonymous is not considered to be
              personal data. 
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              In connection with our communication and collaboration with you,
              we may collect personal data about you. Different personal data
              may be collected on different parties and the processing and
              collection of personal data may depend on your relationship with
              us.
            </p>
            <p>
              Our customers are mainly individuals, but they may also be legal
              persons. When customers are a legal person they have
              representatives and employees whose personal data we may process.
              The personal data is primarily contact information, e.g., name,
              email address, job title and phone number. Regarding our
              communication with you we may need to process a variety of
              personal data, e.g.:
            </p>
            <p>
              contact information, e.g., name, ID number, address, phone number
              and email address, interests, travel period, information on the
              purpose of the trip and special wishes for the trip, information
              regarding the combination of the travel group, health and religion
              information, country of residence, IP number, when needed, and
              billing information. In addition to the aforementioned
              information, Svalbard Experts may collect and process other data
              that you provide to the company, e.g., photographs, as well as
              data that is essential for the company’s business.
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              Why do we collect and process personal data and on what grounds?
            </p>
            <p>
              The processing of personal data about you is mainly based on our
              agreement with you, or the party which you work for. This includes
              contact information so we can contact you and send invoices. 
            </p>
            <p>
              Personal data may also be processed based on your request to enter
              into an agreement. This includes data on interests, travel period,
              information on the purpose of the trip and special wishes for the
              trip.
            </p>
            <p>
              Sensitive personal data will only be processed based on your
              explicit consent. Such data is only collected when deemed
              necessary. 
            </p>
            <p>
              In addition, personal data may be processed on the ground of our
              legitimate interests, e.g., when your email address is used to
              send customer surveys and, as appropriate, direct marketing. 
            </p>
            <p>
              If you do not provide Svalbard Experts the necessary information
              the company may not be able to enter into an agreement with you,
              or the legal person you represent, for the requested service
              and/or the company may be unable to fulfill its obligations on the
              basis of the agreement. 
            </p>
            <p>
              Svalbard Experts undertakes to ensure that all processing of
              personal data is lawful, fair and transparent. Data will only be
              collected for a specific, explicit and legitimate purpose and
              collecting and processing will not go beyond what is necessary for
              the purpose of the processing. The processing shall always be
              adequate, relevant and limited to what is necessary for the
              purpose for which they are processed. 
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              We have made available various services, tools and functionality
              on this website for your use. This is so you can find out about
              and book our products, view content provided by us, interact with
              us and submit and share views with other customers.
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>Disclosure to third parties</p>
            <p>
              Svalbard Experts may disclose your personal data to contractors,
              consultants and suppliers in relation to their work for the
              company. Therefore, personal data may for example be disclosed to
              external parties that provide us with IT services, but also to
              service providers of trips that we book on your behalf. 
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              Svalbard Experts endeavors to take appropriate technical and
              organizational measures to protect the safety of your personal
              data, with special regard to the nature of the data. For example,
              Svalbard Experts has access controls to systems which store data
              about you. These measures are meant to secure personal data
              against accidental destruction or alteration and against
              unauthorized access, duplication, use or disclosure of the
              personal data.
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              Svalbard Experts will endeavor to retain your personal data only
              for as long as necessary for the purpose of the processing, unless
              otherwise permitted or obligated by law.
            </p>
            <p>
              The retention time of personal data is further determined in
              Svalbard Experts Data Retention Policy.
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              You should review these regularly to ensure you are familiar with
              the most up to date version. Browsing and continuing to access or
              use our website constitutes your acceptance of the updated terms
              and conditions.
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              You are entitled to request access to the personal data we process
              on you and information on the processing. You may also be entitled
              to a copy of the personal data undergoing processing.
            </p>
            <p>
              Under certain circumstances you may have the right to request that
              we erase personal data concerning you without undue delay. You may
              also have the right to obtain from us the restriction of
              processing, where certain requirements are fulfilled. You are also
              entitled to request rectification of inaccurate data on you. It is
              therefore important that if your personal data happens to change
              during the course of your relationship with Svalbard Experts, that
              you keep us informed of such changes
            </p>
            <p>
              You may furthermore be entitled to a copy of the personal data
              that you have provided to us in electronic form, or request that
              we transmit them direct to a third party.
            </p>
            <p>
              When we process your personal data based on legitimate interests
              you are at any time authorized to object to the processing.
            </p>
            <p>
              The aforementioned rights are however not without limitation. Laws
              and regulations may authorize or oblige the company to deny your
              request. However, your right to object the processing of your
              personal data for direct marketing purposes is unconditional. 
            </p>
          </li>
          <li className='md:mb-5 mb-3 text-gray md:text-[22px] text-[15px] md:leading-[33px] leading-6 font-normal'>
            <p>
              Svalbard Experts reserves the right to review this policy in
              accordance with changes to applicable legislation or regulations
              or in relation to changes in the company’s processing of personal
              data. You will be notified of any changes made to this policy with
              an updated version, in the same manner that this policy was
              presented to you.
            </p>
            <p>
              Any amendments that may be made to the policy will take effect
              after the updated version has been presented to you.
            </p>
          </li>
        </ul>
      </div>
      <div className='md:block hidden'>
        <GetInTouch />
      </div>
    </section>
  );
};

export default PrivacyPolicy;
