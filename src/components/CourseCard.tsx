import { memo } from "react";
import { motion } from "framer-motion";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

const levelColor: Record<string, string> = {
  Beginner: "text-emerald-400",
  Intermediate: "text-amber-400",
  Advanced: "text-rose-400",
};

const CourseCard = memo(({ course, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center justify-between gap-4 p-4 bg-card border border-border card-top-light hover:border-primary/50 transition-colors cursor-default"
      style={{ borderRadius: "var(--radius)" }}
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-10 h-10 shrink-0 bg-secondary rounded-sm flex items-center justify-center font-mono text-xs font-semibold text-foreground/80 select-none">
          {course.platformShort}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-foreground truncate">{course.title}</h3>
          <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
            {course.platform} • {course.duration} •{" "}
            <span className={levelColor[course.level]}>{course.level}</span>
          </p>
          <div className="flex gap-2 mt-1.5 flex-wrap">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="text-sm font-medium tabular text-foreground hidden sm:block">
          {course.rating.toFixed(1)}
          <span className="text-primary ml-0.5">★</span>
        </span>
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-xs font-medium bg-secondary border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all press-recede"
          style={{ borderRadius: "var(--radius)" }}
        >
          View Course
        </a>
      </div>
    </motion.div>
  );
});

CourseCard.displayName = "CourseCard";

export default CourseCard;
