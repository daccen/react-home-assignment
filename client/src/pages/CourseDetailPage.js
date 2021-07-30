import React from "react";

const CourseDetailPage = ({ match }) => {
  const urlQuery = match.params.courseId;
  const logo = require(`../../public/images/${urlQuery}.jpg`).default;
  const imageAlt = `${urlQuery}-text`;

  return (
    <>
      <h1 className="text-center">{urlQuery.toUpperCase()}</h1>

      <div>
        <p>
          Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
          tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
          tristique, dignissim in, ultrices sit amet, augue. Proin sodales
          libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus,
          commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan
          porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.
          Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum
          non, convallis id, sagittis at, neque.
        </p>
        <p>
          Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
          tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
          tristique, dignissim in, ultrices sit amet, augue. Proin sodales
          libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus,
          commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan
          porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.
          Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum
          non, convallis id, sagittis at, neque.
        </p>
        <img
          src={logo}
          alt={imageAlt}
          style={{ width: "100%" }}
          className="mb-5"
        />
      </div>
    </>
  );
};

export default CourseDetailPage;
