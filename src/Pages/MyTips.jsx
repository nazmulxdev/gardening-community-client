import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import LoadingSpinner from "../Utilities/LoadingSpinner";
import AuthContext from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { successMessage } from "../Utilities/sweetAlerts";

const MyTips = () => {
  const { presentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [myTips, setMyTips] = useState([]);
  console.log(myTips);
  useEffect(() => {
    document.title = `GreenCircle | ${presentUser.displayName}`;
    setLoading(true);
    fetch(`http://localhost:3000/tipsByUser?email=${presentUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
        setLoading(false);
      });
  }, [presentUser]);

  console.log(presentUser.email);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:3000/tipsByUser?email=${presentUser.email}&id=${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingTips = myTips.filter((tip) => tip._id !== id);
              setMyTips(remainingTips);
              successMessage("Your shared tip has been deleted successfully");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="my-8">
        <h1
          className="font-bold text-4xl text-center
        "
        >
          <span className="primaryColor">My Garden</span> Insights
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Availability</th>
              <th>Difficulty</th>
              <th>Details</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="5" className="mx-auto">
                  <LoadingSpinner></LoadingSpinner>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {myTips.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <p className="text-lg font-semibold">
                        You haven’t shared any gardening tips yet!!!
                      </p>
                      <button
                        onClick={() => navigate("/shareGardenTips")}
                        className="btn btn-sm my-btn"
                      >
                        Share Your First Tip
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                myTips?.map((tip, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={tip.photoUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{tip.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{tip.availability}</td>
                    <td>{tip.difficultyLevel}</td>
                    <th className=" grid grid-cols-2 items-center justify-center">
                      <div>
                        <Link
                          to={`/updateSharedTip/${tip._id}`}
                          data-tooltip-id="edit"
                          data-tooltip-content="Update Tip"
                        >
                          <button className="btn my-btn btn-xs">
                            <FaEdit></FaEdit>
                          </button>
                        </Link>
                        <Tooltip
                          id="edit"
                          className="backGround primaryColor"
                        ></Tooltip>
                      </div>
                      <div>
                        <a
                          data-tooltip-id="delete"
                          data-tooltip-content="Delete Tip"
                        >
                          <button
                            onClick={() => handleDelete(tip._id)}
                            className="btn my-btn btn-xs"
                          >
                            <MdDelete></MdDelete>
                          </button>
                        </a>
                        <Tooltip
                          id="delete"
                          className="backGround primaryColor"
                        ></Tooltip>
                      </div>
                    </th>
                  </tr>
                ))
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyTips;
