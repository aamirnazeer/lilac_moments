import classes from './Header.module.scss';

const { header, headerWrappers } = classes;

export default function Header() {
  return (
    <header className={header}>
      <div className={headerWrappers}>
        <div>Lilac Moments</div>
        <div>Home</div>
        <div>Contact Us</div>
      </div>
      <div className={headerWrappers}>
        <div>Account</div>
      </div>
    </header>
  );
}
