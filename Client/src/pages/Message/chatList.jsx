import React from "react";
import { chats } from "../../utils/data/chatData";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div>
      {chats.map((item, idx) => (
        <ChatCard item={item} key={idx} />
      ))}
    </div>
  );
};

const ChatCard = ({ item }) => {
  const { id, image, name, messageList } = item;
  return (
    <Link
      to={`/dashboard/messages/chat/${id}`}
      className="flex items-center justify-between border-b border-[gray] px-10 py-3"
    >
      <aside className="flex gap-3">
        <div className="w-14 h-14 rounded-full border overflow-hidden">
          <img src={image} alt="profile" className="w-full h-full" />
        </div>
        <div>
          <h2 className="font-Esemi capitalize">{name}</h2>
          <p>
            {messageList.map((item, idx) => {
              if (idx === messageList.length - 1)
                return <p className="font-ERegular ">{item.message}</p>;
            })}
          </p>
        </div>
      </aside>
      <p>just now</p>
    </Link>
  );
};

export default ChatList;
