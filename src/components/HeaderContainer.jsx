import Image from "next/image";

export const HeaderContainer = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-(--bg-main) border-b border-(--border-color)">
      {/* Welcome */}
      <div>
        <h2 className="text-xl font-semibold text-(--text-primary)">
          Welcome back, Ale 👋
        </h2>
        <p className="text-sm text-(--text-secondary)">
          Here’s what’s happening today.
        </p>
      </div>

      {/* User */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-(--accent-primary)" />
        <span className="text-(--text-primary)">Ale</span>
      </div>
    </header>
  );
};
