import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode === 404 ? 'Page Not Found' : 'An error occurred'}</h1>
      <p>Status code: {statusCode}</p>
    </div>
  );
};

// Static method to get error information on the server side
ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
