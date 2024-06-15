import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SessionDetails = () => {
  const id = useParams();
  // console.log(id.id);
  const { sessions } = useAuth();
  const detailsSession = sessions.filter((item) => item.id === id.id);
  console.log(detailsSession);
  return (
    <div>
      <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-50 dark:text-gray-800">
        <article>
          <h2 className="text-xl font-bold">
            Sed diam massa, semper a condimentum
          </h2>
          <p className="mt-4 dark:text-gray-600">
            Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet
            libero. Fusce faucibus porttitor lacus, at blandit mauris blandit
            eget. Donec facilisis lorem et risus commodo, quis auctor nulla
            varius. Pellentesque facilisis feugiat turpis, id molestie augue
            semper quis. Nunc ornare eget est sit amet elementum.
          </p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Leroy Jenkins</h3>
              <time
                dateTime="2021-02-18"
                className="text-sm dark:text-gray-600"
              >
                Feb 18th 2021
              </time>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SessionDetails;
