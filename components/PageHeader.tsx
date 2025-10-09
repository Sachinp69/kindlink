import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  leftComponent?: React.ReactNode; // e.g., KindLinkHeader
  rightComponent?: React.ReactNode; // optional actions
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className,
  leftComponent,
  rightComponent,
}) => (
  <header className={`relative flex items-center justify-between px-6 py-8 border-b border-gray-700  ${className ?? ""}`}>
    
    {/* Left: KindLinkHeader or logo */}
    <div className="flex-shrink-0">{leftComponent}</div>

    {/* Center: Page Title */}
    <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 py-5">{title}</h1>

      {subtitle && <p className="mt-1 text-lg text-gray-600">{subtitle}</p>}
    </div>

    {/* Right: optional actions */}
    <div className="flex-shrink-0">{rightComponent}</div>
  </header>
);

export default PageHeader;
