import Link from "next/link";

const UserDetail = ({ field, value,url }) => {
  return (
    <li className="flex items-center">
      <span className="flex-[0_0_6rem]">{field}</span>
      <span className="flex-[0_0_2rem]">:</span>
      <a href={url} className="text-black dark:text-white">{value}</a>
    </li>
  );
};

export default UserDetail;
