// import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text, Tailwind } from '@react-email/components';

// import * as React from 'react';


// const WelcomeEmail = ({

//   email = 'newuser',

//   message = 'ACME',

// }: WelcomeEmailProps) => {

//   const previewText = `Email From Portfolio!`;


//   return (

//     <Html>

//       <Head />

//       <Preview>{previewText}</Preview>

//       <Tailwind>

//       <Body className="bg-white my-auto mx-auto font-sans">

//         <Container className="my-10 mx-auto p-5 w-[465px]">

//           <Section className="mt-8">

//             <Img

//               src={`${baseUrl}/static/example-logo.png`}

//               width="80"

//               height="80"

//               alt="Logo Example"

//               className="my-0 mx-auto"

//             />

//           </Section>

//           <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0">

//           Email From Portfolio! ({email})

//           </Heading>

//           <Text className="text-sm">

//             Hello,

//           </Text>

//           <Text className="text-sm">

//             {message}

//           </Text>

//           <Section className="text-center mt-[32px] mb-[32px]">

              

//           </Section>

          

//         </Container>

//       </Body>

//       </Tailwind>

//     </Html>

//   );

// };


// interface WelcomeEmailProps {

//   email?: string;

//   message?: string;

// }


// const baseUrl = process.env.URL

//   ? `https://${process.env.URL}`

//   : '';


// export default WelcomeEmail;

import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div>
    <h1>Welcome, {email}!</h1>
  </div>
);
