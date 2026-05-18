import React from "react";
import Heading from "../../Props/Heading";
import Topic from "../../Props/Topic";
import Subheading from "../../Props/Subheading";

const ContactPage = () => {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto-py-20 px-6"></div>

      {/* hero */}
      <div className="hero">
        <Topic topic="contact" />
        <Heading leftAlign title="Let's talk" />
        <Subheading
          leftAlign
          description="Got a project, a role, or a question? Drop me a message -I usually reply in a day."
        />
      </div>


      {/* details */}
      <div className="flex flex-col gap-3">
        .flex.gap-3.
      </div>
    </section>
  );
};

export default ContactPage;
