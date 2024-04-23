import '../assets/styles/Profile.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1 className="h1">{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        // 更複雜一點的 JS 變數引用
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
