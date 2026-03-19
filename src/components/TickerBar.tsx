const tickerItems = [
  { num: "Legacy Rise Sports", label: "CEO & Founder" },
  { num: "Sharaf Mahama Foundation", label: "Philanthropist" },
  { num: "25.3K+", label: "Sports Followers" },
  { num: "Africa's Premier", label: "Sports Promotion Company" },
  { num: "Building Champions", label: "Creating Legacies" },
  { num: "500+", label: "Athletes Supported" },
  { num: "24", label: "Communities Reached" },
];

const TickerBar = () => (
  <div className="overflow-hidden py-4 border-y border-border bg-accent/30">
    <div className="flex animate-ticker whitespace-nowrap">
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <div key={i} className="flex items-center gap-3 px-8 shrink-0">
          <span className="font-display font-bold text-sm md:text-base tracking-tight text-foreground">
            {item.num}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TickerBar;
