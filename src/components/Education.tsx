import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-6 h-6 text-gray-400" />
          <h2 className="text-3xl font-light tracking-wide text-gray-900">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {/* Bachelor Degree */}
          <div className="bg-white p-8 rounded-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-lg font-light text-gray-600">
                  SRM University AP
                </p>
              </div>
              <span className="text-sm font-light text-gray-500">
                2022 – 2026
              </span>
            </div>

            <div className="w-16 h-px bg-gray-300 my-6"></div>

            <div className="space-y-4 text-gray-600 font-light">
              <p>Major: Computer Science Engineering</p>
              <p>Current Status: Final Year</p>
              <p className="pt-4">
                Relevant Coursework: Data Structures, Algorithm Design, Operating
                Systems, Database Management Systems, Machine Learning, Digital
                Signal Processing, Robotics.
              </p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-white p-8 rounded-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">
                  Intermediate (12th Grade)
                </h3>
                <p className="text-lg font-light text-gray-600">
                  Board of Intermediate Education, Andhra Pradesh
                </p>
              </div>
              <span className="text-sm font-light text-gray-500">
                2020 – 2022
              </span>
            </div>

            <div className="w-16 h-px bg-gray-300 my-6"></div>

            <div className="space-y-3 text-gray-600 font-light">
              <p>Stream: MPC (Mathematics, Physics, Chemistry)</p>
            </div>
          </div>

          {/* 10th Grade */}
          <div className="bg-white p-8 rounded-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">
                  Secondary School (10th Grade)
                </h3>
                <p className="text-lg font-light text-gray-600">
                  Central Board of Secondary Education
                </p>
              </div>
              <span className="text-sm font-light text-gray-500">
                2019 – 2020
              </span>
            </div>

            <div className="w-16 h-px bg-gray-300 my-6"></div>

            <div className="space-y-3 text-gray-600 font-light">
              <p>General Studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
