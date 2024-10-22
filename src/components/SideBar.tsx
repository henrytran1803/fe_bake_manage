import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState, ReactNode } from "react"
import { useNavigate } from 'react-router-dom';

interface SidebarContextType {
  expanded: boolean;
  setExpanded?: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-[#FDEEEE] items-center border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/logoapp.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    active: boolean;
    alert?: boolean;
    route: string;
    onClick: (route: string) => void;
  }
  
  export function SidebarItem({ icon, text, active, alert, route, onClick }: SidebarItemProps) {
    const context = useContext(SidebarContext);
    
    if (!context) {
      throw new Error("SidebarItem must be used within a Sidebar");
    }
  
    const { expanded } = context;
    
    return (
      <li onClick={() => onClick(route)} // Gọi onClick khi nhấn
        className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-[#F2CBCB] text-white"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded 
                ${active ? "bg-white" : "bg-[#F2CBCB]"}
                ${expanded ? "" : "top-2"}`}
          />
        )}
  
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
    );
  }