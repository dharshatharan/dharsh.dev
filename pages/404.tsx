import PageLayout from "@components/Layout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="w-full my-32 text-center prose md:prose-xl dark:prose-light">
        <div>
          <h1 className="mr-0">404 - Page Not Found</h1>
          <p>
            Oops, looks like you landed in a page that does not exist! Anyway,
            here is a fun fact about me.
          </p>
          <p>
            I eat my pizza crust first! It is because I save the best for the
            last.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
